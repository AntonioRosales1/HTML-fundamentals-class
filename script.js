const contactBtn = document.getElementById(`contactBtn`);

contactBtn.addEventListener(`click`, function contact() {
  alert(`If you would like to find out more you can contact Antonio.
  <br>Cell number: 720-123-4567
  <br>Email: 123abc@email.com`);
});

window.alert = function (message, timeout = 10000) {
  const alert = document.createElement(`div`);
  const okBtn = document.createElement(`button`);
  okBtn.innerHTML = `Go Back`;
  okBtn.setAttribute(
    `style`,
    `
  background-color: rgb(71, 49, 13);
  width: 90px;
  height: 50px; 
  color: beige;
  font-size: 18px;
  font-weight: 600;
  border-radius: 95px;
 
  border: dotted rgb(141, 134, 134);`
  );

  alert.classList.add(`alert`);
  alert.setAttribute(
    `style`,
    `
  position: fixed;
  top: 20%;
  left: 30%;
  padding:20px;
  
  border: dotted rgb(141, 134, 134);
  border-radius: 35px;
  
  background-color: rgb(80, 12, 12);
  width: 450px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;`
  );
  alert.innerHTML = `<span>${message}</span> `;
  alert.appendChild(okBtn);
  okBtn.addEventListener(`click`, (e) => {
    alert.remove();
  });
  if (timeout != null) {
    setTimeout(() => {
      alert.remove();
    }, Number(timeout));
  }
  document.body.appendChild(alert);
};
