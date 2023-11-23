import React from 'react';
import html2canvas from 'html2canvas';
import Button from '@mui/material/Button';

class DownloadBtn extends React.Component {
  handleDownloadClick = () => {
    const { targetDivId } = this.props;

    const targetDiv = document.getElementById(targetDivId);

    if (targetDiv) {
      html2canvas(targetDiv).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'div_snapshot.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } else {
      console.error(`Div with id ${targetDivId} not found.`);
    }
  };

  render() {
    return (
      <Button onClick={this.handleDownloadClick}>
        Télécharger
      </Button>
    );
  }
}

export default DownloadBtn;
