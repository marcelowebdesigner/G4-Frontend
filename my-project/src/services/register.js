

export default async function register() {
    const rawResponse = await fetch('http://127.0.0.1:8000/auth/users/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)  
    });
    const content = await rawResponse.json();    
    console.log(content);
  }
  