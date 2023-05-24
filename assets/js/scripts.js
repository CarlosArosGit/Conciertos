class User {
  constructor(userName, correo, pass) {
    this.userName = userName;
    this.correo = correo;
    this.pass = pass;
  }
  mostrarInfo() {
    return `Email: ${this.correo} Contraseña: ${this.pass}`;
  }

}
class UserVip extends User {
  mostrarInfoVip() {
    return `Usuario: ${this.userName} Email: ${this.correo} Contraseña: ${this.pass}`;
  }
}

const asignarFunciones = () => {
  let btnSign = document.getElementById('btnSign');
  btnSign.addEventListener('click', getDataForm1);
  let btnSign2 = document.getElementById('btnSign2');
  btnSign2.addEventListener('click', getDataForm2);
  let tabUno = document.getElementById('tabUno');
  tabUno.addEventListener('click', changeTab1);
  let tabDos = document.getElementById('tabDos');
  tabDos.addEventListener('click', changeTab2);

}

const getDataForm1 = () => {
  let correo = document.getElementById('correo').value;
  let pass = document.getElementById('pass').value;
  let check = document.getElementById('check1');
  let numRandom = Math.ceil(Math.random() * 990);
  let userName = `Usuario${numRandom}`;
  if(check.checked == false){
    sendModal('check');
  }else if(!correo.includes('@') || !correo.includes('.')){
    sendModal('correo');
  }else if(pass == ''){
    sendModal('pass');
  }else if(check.checked == true && correo.includes('@') && correo.includes('.') && pass != ''){
    const userComun = new User(userName, correo, pass);
    sendModal(userComun);

  }
}

const sendModal = (user) => {
  let msjModal = document.getElementById('msjModal');
  if(user == 'check'){
    msjModal.innerText = 'Debes aceptar los términos y condiciones.';
  }else if(user == 'correo'){
    msjModal.innerText = 'Debes escribir un correo válido.';
  }else if(user == 'pass'){
    msjModal.innerText = 'El campo Contraseña no puede estar vacío.';
  }else{
    let nombreDeUsuario = document.getElementById('nombreDeUsuario');
    nombreDeUsuario.innerText = `Bienvenido ${user.userName}`;
    msjModal.innerText = user.mostrarInfo();
    limpiarInputs();
  }

}

const getDataForm2 = () => {
  let correo = document.getElementById('correoVip').value;
  let pass = document.getElementById('passVip').value;
  let check = document.getElementById('check2');
  let userName = document.getElementById('userName').value;
  if(check.checked == false){
    sendModalVip('check');
  }else if(!correo.includes('@') || !correo.includes('.')){
    sendModalVip('correo');
  }else if(pass == ''){
    sendModalVip('pass');
  }else if(userName == ''){
    sendModalVip('userName');
  }else if(check.checked == true && correo.includes('@') && correo.includes('.') && pass != '' && userName != ''){
    const userVip = new UserVip(userName, correo, pass);
    sendModalVip(userVip);

  }
}
const sendModalVip = (userVip) => {
  let msjModal = document.getElementById('msjModal');
  if(userVip == 'check'){
    msjModal.innerText = 'Debes aceptar los términos y condiciones.';
  }else if(userVip == 'correo'){
    msjModal.innerText = 'Debes escribir un correo válido.';
  }else if(userVip == 'pass'){
    msjModal.innerText = 'El campo Contraseña no puede estar vacío.';
  }else if(userVip == 'userName'){
    msjModal.innerText = 'Estas creando una cuenta VIP, no pierdas la oportunidad de elegir tu nombre de usuario';
  }else{
    let nombreDeUsuario = document.getElementById('nombreDeUsuario');
    nombreDeUsuario.innerText = `Bienvenido ${userVip.userName}`;
    msjModal.innerText = userVip.mostrarInfoVip();
    limpiarInputs();
  }
}
const changeTab1 = () => {
  document.getElementById('tabDos').classList.remove("activeTab2");
  document.getElementById('tabUno').classList.add("activeTab");
  document.getElementById('tab1').style.display = 'block';
  document.getElementById('tab2').style.display = 'none';
}
const changeTab2 = () => {
  document.getElementById('tabUno').classList.remove("activeTab");
  document.getElementById('tabDos').classList.add("activeTab2");
  document.getElementById('tab1').style.display = 'none';
  document.getElementById('tab2').style.display = 'block';
}

const limpiarInputs = () => {
  document.getElementById('correo').value = '';
  document.getElementById('pass').value = '';
  document.getElementById('check1').checked = false;
  document.getElementById('userName').value = '';
  document.getElementById('correoVip').value = '';
  document.getElementById('passVip').value = '';
  document.getElementById('check2').checked = false;
}