function main(){
  function createListObject(){
    let newElement = document.createElement('li');
    //let listObject = document.createElement('li');
    let addButton = document.createElement('button');
    addButton.innerText = 'Apagar';
    newElement.innerHTML = `<span>${addText.value}</span>`;
    newElement.appendChild(addButton);
    //newElement.appendChild(listObject);
    
    return newElement;
  }
  
  function insertObjectInList(object){
    list.appendChild(object);
  }
  
  function deleteListObject(element){
    let fatherNode = element.parentNode;
    fatherNode.remove();
    listSave()
  }
  
  function listSave(){
    let listToSave = list.querySelectorAll('li');
    let savedList = [];
  
    for (let objects of listToSave){
      let objectContent = list.innerHTML;
      savedList.push(objectContent);
    }
  
    const listJson = JSON.stringify(savedList);
    console.log(listJson);
    localStorage.setItem('list', listJson);
  }
  
  function listRecover(list){
    const toRecoverList = localStorage.getItem('list');
    const recoveredList = JSON.parse(toRecoverList);
  
    for (let i in recoveredList){
      list.innerHTML = recoveredList[i];
    }
  }
  
  const addList = document.querySelector('#addList');
  const  list = document.querySelector('#list');
  const addText = document.querySelector('.add-to-list')
  
  listRecover(list)
  
  addList.addEventListener('click', event => {
    let element = event.target;
  
    if (element.tagName === 'BUTTON'){
      let listObject = createListObject();
      insertObjectInList(listObject);
      listSave()
    }
  })
  
  list.addEventListener('click', event => {
    let element = event.target;
    if (element.tagName === 'BUTTON'){
      deleteListObject(element);
    }
  })
}

main()