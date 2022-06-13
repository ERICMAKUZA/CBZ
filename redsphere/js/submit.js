
document.getElementById("221492345987063").addEventListener("submit", SubmitEvent);
function SubmitEvent() {
    event.preventDefault();

//Variable declaration
   let myForm = event.target;
   let fd = new FormData(myForm);
  
//declare object with preset values
    const details = { 
        empolymentType:"permanent",
        nationality: "string",
        noOfDependants: "4",
        usaCitizenship: "no",
        usaResidentCard: "no",
        Town: "string",
        postalAddress: "string",
        initials: "string",
        insolvent: "no",
        maritalStatus: "string",
        insolventDetail: "string",
        microfinanceRelated: "string",
        microfinanceRelatedName: "string",
        otherIncomeSources: "null",
        spouseName: "string",
        spouseAddress: "string",
        spouseEmail: "string",
        spouseEmployer: "string",
        spouseEmpAdd: "string",
        civilJudgements: "string",
        sectionCode: "234",
        guarantorAdd: "string",
        guarantorCity: "string",
        guarantorHomeType: "string",
        guarantorEmployer: "string",
        guarantorEmpAdd: "string",
        createdBy: "saltis.staltis",
        sector: "string",
        loanProductType: "Salary Based Loan",
        emailOwner: "me",
        isChiboque: false,
        chiboqueLoanID: "1",
        savedFrom: "string",
        agent: "string",
        agentReference: "Mike",
        nextofkinrelatioship: "string",
        currEmpEmail: "string",
        monthlySalaryDate: "2022-09-09",
        spousePhone: "345678",
        nextOfKinRelMoBitel: "string",
        guarantorEmployer: "string",
        guarantorEmployerAdd: "string",
        guarantorEmployerHomeTel: "34567",
        timeCurrRes: "45",
        timePrevRes: "87",
        currency: "string",
        guarantorIdno: "string",
        guarantorPhone: "12345678",
        guarantorRent: "23456.00",
        guarantorHomeLength: "56",
        guarantorEmpLength: "7",
        guarantorEmpPhone: "string",
        guarantorEmpEmail: "string",
        guarantorEmpPostn: "string",
        guarantorEmpSalary: "23456789.00",
        guarantorEmpIncome: "23456.00",
        loanTenure: "45",
        loanRepayDate: "2022-07-09",
        loanApplicationDate: "2022-07-09",
        prevBorrowings: "string",
        defaulthistory: "no",
        mainincomesource: "string",
        netincome: "65349889.00",
        accountsotherbanks: "string",
        otherpropertyowenership: "string",
        periodinmonths: "12",
        repaymentIntervalNum: "23",
        repaymentUnitInterval: "string",
        adminRate: "12",
        refundBank: "string",
        refundBranch: "string",
        refundBankAccNo: "9876543",
        roleid: "4041"
      };
  
 //Loop through form data and add in object
    for (let key of fd.keys()) {
    
    const after = key.substring(key.indexOf('_') + 1 );

    details[after]=fd.get(key);

    }
    
  //Remove the first and last details

  //   const cutdetails= Object.fromEntries(
  //     Object.entries(details).slice(1,117)
  // )

  //delete unwanted properties
  function deleteProps (obj, prop) {
    for (const p of prop) {
        (p in obj) && (delete obj[p]);
    }    
}

deleteProps(details, ['title[]','currBorrowings[]','gender[]','citizenship[]','homeType[]' ,'maritalStatus[]','citizenship[other]','fundsTransfer','disbursementOption[]','dateJoined[year]','dateJoined[month]','dateJoined[day]','date87[year]','date87[month]','date87[day]','date137[year]','date137[month]','date137[day]','date[year]','date[month]','date[day]','country','id','productValue','formID', 'pleaseVerify','date87','signature','signature86','signature89','signature113','website','captcha','40Of','typeA','spc','website','title[other]','idNumber','loanValue','expiryOf', 'placeOf121','nextOf[]','nextOf[other]','processedBy','residenceStatus[]','residenceStatus[other]','newLoan','fullName','arrangementFees','monthlyInstallment','name','countryOf','processedBy','typeA140','typeA132']);

  
//diplay the object in console

    console.log(details)
    console.log(JSON.stringify(details))

//display object length in console
    console.log(Object.keys(details).length)

//Post object to an API
//     fetch('https://demo.cpay.co.zw/rial/Escrow2077/v004/api/saveData', {
//       method: 'POST',
//       body: JSON.stringify(details),
//      headers: {
//           //designates the content to be in JSON format, encoded in the UTF-8 character encoding
//        'Content-type': 'application/json',
//        'Authorization': 'Basic RXNjcm93MjA3NzorMkxVVFVAOHViIWF6SlJR',
//        'Connection': 'keep-alive',
//        'Accept-Encoding':'gzip, deflate, br',
//        'Access-Control-Allow-Origin': '*',
      
//       },
//    })
//       .then((response) =>{
   
//       console.log(response.json())})
//      .then((json) => console.log(json));

     
     fetch('https://demo.cpay.co.zw/rial/Escrow2077/v004/api/saveData', {
        method: 'POST',
        body: JSON.stringify(details),
       headers: {
            //designates the content to be in JSON format, encoded in the UTF-8 character encoding
         'Content-type': 'application/json',
         'Authorization': 'Basic RXNjcm93MjA3NzorMkxVVFVAOHViIWF6SlJR',
         'Connection': 'keep-alive',
         'Accept-Encoding':'gzip, deflate, br',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Methods': '*',
         'Accept':'*/*',
         'Host':'<calculated when request is sent>',
         'Cookie':'JSESSIONID=401D089F6C826F0A59D09152A1CCF218',
         'Content-Length':'<calculated when request is sent>',
        },
     }).then((response) => {
         console.log(response)
        if (response.ok) {
          return response.json();
          console.log('SUCCESS')
        }else{
        throw new Error('Something went wrong')}
        
      })
      .then((responseJson) => {
        // Do something with the response
      })
      .catch((error) => {
        console.log(error.message)
        window.open("error.html");
        window.stop();
      });
  

  
}

