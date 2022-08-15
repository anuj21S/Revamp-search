function view_profile_page(){
    document.getElementById('profile-box').style.display = 'block';
}
function hide_profile_page(){
    document.getElementById('profile-box').style.display = 'none';
}
function element(id){
    return document.getElementById(id);
}
function viewProfile(roll){
    let s = find_student_by_roll(roll);
    if (s==null){
        alert("Student not found!");
        return;
    }
    element("profile-image").setAttribute('src', s.img);
    element("profile-name").innerHTML = s.name;
    element("profile-dept").innerHTML = s.dept;
    element("profile-roll").innerHTML = s.roll;
    element("profile-hall").innerHTML = s.hall;
    element("profile-home").innerHTML = "&#127968; " + s.home;
    element("profile-bgrp").innerHTML = "Blood Group : " + s.bg;
    element("profile-mail").innerHTML = "E-Mail: <a href='mailto:" + s.mail + "'>"+s.mail +"</a>";
    element("family-brother").innerHTML = "";
    element("family-parent").innerHTML = "";
    element("family-child").innerHTML = "";
    let p = find_student_by_roll(s.parent);
    if (p != null){
        element("family-parent").innerHTML = p.name;
        element("family-parent").setAttribute('onclick', "viewProfile(" + s.parent + ");");
        element("family-brother").innerHTML = "";
        for (let i=0; i<p.child.length; i++){
            let c = find_student_by_roll(p.child[i]);
            element("family-brother").innerHTML += '<div class="brother" onclick="viewProfile(' + c.roll +')">' + c.name +' </div>' ;
        }    
    }else{
        element("family-brother").innerHTML += '<div class="brother" onclick="viewProfile(' + s.roll +')">' + s.name +' </div>'; 
    }
    for (let i=0; i<s.child.length; i++){
        let c = find_student_by_roll(s.child[i]);
        element("family-child").innerHTML += '<div class="child" onclick="viewProfile(' + c.roll +')">' + c.name +' </div>' 
    }
    view_profile_page();
}
function create_user_cards(){
    let usrcard = "";
    let e = element("user-cards");
    e.innerHTML = "";
    for (let i = 0; i<students.length; i++){
        usrcard = '<div class="user-card" onclick="viewProfile(' + students[i].roll +' )">';
        usrcard += '<img src="' + students[i].img + '" class="user-image"  alt="Profile Picture">';
        usrcard += '<div class="user-name">' + students[i].name + ' </div>';
        usrcard += '<div class="user-dept">' + students[i].dept + '</div>';
        usrcard += '<div class="user-roll">' + students[i].roll + '</div>';
        usrcard += '</div>';
        e.innerHTML += usrcard;
    }
}
create_user_cards();


