// TODO
// - da zastane ako ima slika
// - da zastane ako ima trik prasanje
// - da moze da se selektira samo ednas opcijata "Znamko uporabljam najpogosteje"

forms = document.forms;

for (form of forms) {
    form.onsubmit = function() {
        return false;
    }

    for(element of form)
    {
        // alert('test');
        myTimeout = setTimeout(Check, 10, element);
    }

    form.onsubmit = function() {
        return true;
    }
 }
 
function Check(element)
{
    if(element.type == "checkbox")
    {
        // const checkboxIpsosName = element.name.split("__")[0];
        let randomNumber = Math.floor((Math.random() * 9) + 1);
        
        if(randomNumber < 4)
        {
            element.checked = true;
        }
    }

    if(element.type == "radio")
    {
        if(!element.checked)
        {
            let elementCollection = document.getElementsByName(element.name);
            let elementCollectionLength = elementCollection.length;
            let randomIndex = Math.floor((Math.random() * elementCollectionLength));
            if(elementCollectionLength > 3 && (randomIndex == elementCollection.length -1))
            {
                randomIndex--; 
            }

            document.getElementsByName(element.name)[randomIndex].checked = true;
        }
    }
}