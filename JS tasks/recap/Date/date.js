

function calculate()
{
    let end = document.getElementById('end');
    let Sdate = document.getElementById('Sdate').value;
    let Edate = new Date(Sdate);
    Edate.setDate(Edate.getDate(Sdate)+100);
    
    var result = Edate.getDate()+"-"+(Edate.getMonth()+1)+"-"+Edate.getFullYear();
    end.value=result;
}

// function calcday()
// {
//     let d1 = document.getElementById('date1').value;
//     let d2 = document.getElementById('date2').value;    

//     const timeDifference = Math.abs(d2 - d1);
//     const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

//     document.getElementById('daysResult').textContent = daysDifference;
// }

function countDay(dayName) {
    const daysInMonth = 30;
    let count = 0;

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(2023, 8, day); // Month is 0-indexed (September is 8)
        if (date.toLocaleDateString('en-US', { weekday: 'long' }) === dayName) {
            count++;
        }
    }

    document.getElementById('result').textContent = `Number of ${dayName}s in the month: ${count}`;
}   