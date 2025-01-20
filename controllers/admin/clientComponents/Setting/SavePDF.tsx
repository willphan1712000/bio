import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const handleClick = () =>{   
  const front = document.querySelector("#template-container") as HTMLElement;
  const front_d = front.getBoundingClientRect()
  html2canvas(front, {
      width: front_d.width,
      height: front_d.height,
      x: 0,
      y: 0,
      useCORS: true,
  }).then(canvas => {
      const r = canvas.width / canvas.height;
      const width = 200;
      const height = width / r;
      const doc = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [width, height]
      });
      const img = document.createElement("img");
      img.src = canvas.toDataURL("image/png");
      doc.addImage(img, "png", 0, 0, width, height);
      doc.save("front.pdf");
  })

  const back = document.querySelector(".card-back-container") as HTMLElement;
  const back_d = back.getBoundingClientRect()
  html2canvas(back, {
      width: back_d.width,
      height: back_d.height,
      x: 0,
      y: 0,
      useCORS: true,
  }).then(canvas => {
      const r = canvas.width / canvas.height;
      const width = 200;
      const height = width / r;
      const doc = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [width, height]
      });
      const img = document.createElement("img");
      img.src = canvas.toDataURL("image/png");
      doc.addImage(img, "png", 0, 0, width, height);
      doc.save("img/back.pdf");
  })
}
const SavePDF = () => {
  return (
    <div onClick={handleClick} className="flex justify-center items-center flex-shrink-0 cursor-pointer h-fit typebox"><i className="fa-solid fa-image mr-[5px]"></i>Save PDF</div>
  )
}

export default SavePDF
