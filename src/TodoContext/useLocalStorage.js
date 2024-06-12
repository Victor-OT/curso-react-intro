import React from "react";

function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

    React.useEffect(() => {
      setTimeout(() => {
        try {
          console.log('Probando')
          const localStorageItem = localStorage.getItem(itemName)
  
        let parseditem;
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parseditem = initialValue
          }
          else {
            parseditem = JSON.parse(localStorageItem)
            setItem(parseditem)
          }
  
          setLoading(false)
        } catch (error) {
          setLoading(false)
          setError(true)
        }
      }, 2000);
      },[])
  
      const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }
  
    return {item, saveItem, loading, error}
  }

  export {useLocalStorage}

  /* const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso de Introduccion a Js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'Hacer la tarea', completed: false},
  {text: 'Completar la clase 8', completed: true},
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
localStorage.removeItem('TODOS_V1')
 */