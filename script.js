function testVariable() {
    var salutation = document.getElementById("salutation").value;
    var firstname = document.getElementById("firstname").value;          
    var lastname = document.getElementById("lastname").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var code = document.getElementById("postalcode").value;
    if(firstname == null || firstname == ""){
        alert("Please enter your First Name");
        return;
    }
    if(email.includes("@") == false || email.includes(".com") == false){
        alert("Enter a valid Email Address");
        return;
    }
    if(password.length < 6){
        alert("Password must be at least 6 characters long");
        return;
    }
    if(address == null || address == ""){
        alert("Please enter your Address");
        return;
    }
    if(phone.length != 10){
        alert("Please enter a valid Phone Number");
        return;
    }
    if(city == null || city == ""){
        alert("Please enter your City");
        return;
    }
    if(state == null || state == ""){
        alert("Please enter your State");
        return;
    }
    if(code.length != 6){
        alert("Please enter a valid postal code");
        return;
    }
    else{
        var nameresult = salutation + ' ' + firstname + ' ' + lastname;
        document.getElementById('nameresult').textContent = nameresult;
        var emailresult = email;
        document.getElementById('emailresult').textContent = emailresult;
        var addressresult = address;
        document.getElementById('addressresult').textContent = addressresult;
        var phoneresult = phone;
        document.getElementById('phoneresult').textContent = phoneresult;
        var cityresult = city;
        document.getElementById('cityresult').textContent = cityresult;
        var stateresult = state;
        document.getElementById('stateresult').textContent = stateresult;
        var coderesult = code;
        document.getElementById('coderesult').textContent = coderesult;
    }
}
function clearField() {
    document.getElementById("firstname").value = '';          
    document.getElementById("lastname").value= '';
    document.getElementById("password").value= '';
    document.getElementById("email").value= '';
    document.getElementById("address").value= '';
    document.getElementById("phone").value= '';
    document.getElementById("city").value= '';
    document.getElementById("state").value= '';
    document.getElementById("postalcode").value= '';
    document.getElementById('nameresult').value= '';
    document.getElementById('emailresult').value= '';
    document.getElementById('addressresult').value= '';
    document.getElementById('phoneresult').value= '';
    document.getElementById('cityresult').value= '';
    document.getElementById('stateresult').value= '';
    document.getElementById('coderesult').value= '';
}