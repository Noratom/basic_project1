
document.getElementById('bedcForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
  
    const BEDCRegNo = document.getElementById('BEDCRegNo').value;
    
    try {
        const response = await fetch('http://localhost:4000/auth/regcheck', {
            method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ BEDCRegNo }),
        });

        const result = await response.json();
        if (result.status === 'ok') {
          localStorage.setItem('contractor', result.contractor);
            setTimeout(() => {
                window.location.href = 'principal-persons.html';
            }, 1000);
        }
        else {
            console.log(result.msg);
            alert(result.msg);
        }
    } catch (e){
        console.log(e);
    }
    
    }
  );
  

  console.log("i got here")