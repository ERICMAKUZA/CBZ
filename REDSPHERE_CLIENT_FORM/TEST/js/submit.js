
document.getElementById("212632286624051").addEventListener("submit", SubmitEvent);
function SubmitEvent() {
    event.preventDefault();

//Variable declaration
   let myForm = event.target;
   let fd = new FormData(myForm);
  
//declare object with preset values
    const details = { 
        
      };
 //Loop through form data and add in object
    for (let key of fd.keys()) {
    
    const after = key.substring(key.indexOf('_') + 1 );

    details[after]=fd.get(key);

    }
  
  function deleteProps (obj, prop) {
    for (const p of prop) {
        (p in obj) && (delete obj[p]);
    }    
     }

deleteProps(details, ['title[]','signature162','server','NextOfkindob','upload[q161_uploadIdpassport][]','upload_folder','loanPurpose[]','ccc','file','currBorrowings[]','','citizenship[]','homeType[]' ,'maritalStatus[]','citizenship[other]','fundsTransfer','disbursementOption[]','dateJoined[year]','dateJoined[month]','dateJoined[day]','date87[year]','date87[month]','date87[day]','date137[year]','date137[month]','date137[day]','date[year]','date[month]','date[day]','country','id','productValue','formID', 'pleaseVerify','date87','signature','signature86','signature89','signature113','website','captcha','40Of','typeA','spc','website','title[other]','idNumber','loanValue','expiryOf', 'placeOf121','nextOf[]','nextOf[other]','processedBy','residenceStatus[]','residenceStatus[other]','newLoan','fullName','arrangementFees','monthlyInstallment','name','countryOf','processedBy','typeA140','typeA132']);

  
Object.keys(details).forEach((k) => {
if(k.substr(0,10)==='branchName'){
details[k] == '' && delete details[k]
details['branchName'] = details[k];
//const ky=details[k];
//const Code =ky.substring(ky.indexOf('-') + 1 );
const {branchName } = details;
console.log(branchName.substring(branchName.indexOf('-') + 1 ));
//console.log(ky.substring(ky.indexOf('-') + 1 ))
delete details[k];

}
}
);


// Object.keys(details).forEach((k) => {
//   if(k==='branchName'){

  //const Code =ky.substring(ky.indexOf('-') + 1 );
 
  details.branchCode='6789';


  const property = 'branchCode';


//Post object to an API

    //  fetch('https://demo.cpay.co.zw/rial/Escrow2077/v004/api/saveData', {
    //     method: 'POST',
    //     body: JSON.stringify(details),
    //    headers: {
    //         //designates the content to be in JSON format, encoded in the UTF-8 character encoding
    //      'Content-type': 'application/json',
    //      'Authorization': 'Basic RXNjcm93MjA3NzorMkxVVFVAOHViIWF6SlJR',
    //      'Connection': 'keep-alive',
    //      'Accept-Encoding':'gzip, deflate, br',
    //      'Access-Control-Allow-Origin': '*',
    //      'Access-Control-Allow-Methods': '*',
    //      'Accept':'*/*',
    //      'Host':'<calculated when request is sent>',
    //      'Cookie':'JSESSIONID=401D089F6C826F0A59D09152A1CCF218',
    //      'Content-Length':'<calculated when request is sent>',
    //     },
    //  }).then((response) => {
    //      console.log(response)
    //     if (response.ok) {
    //       return response.json();
    //       console.log('SUCCESS')
    //     }else{
    //     throw new Error('Something went wrong')}
        
    //   })
    //   .then((responseJson) => {
    //     // Do something with the response
    
    //   })
    //   .catch((error) => {
    //     console.log(error.message)
    //     window.open("error.html");
    //     window.stop();
    //   });
  

  
}

