//
// // 회원가입 입력 검증 처리
// let idFlag = false;
//
// // 계정 중복검사 비동기 요청 보내기
// async function fetchDuplicateCheck(idValue){
//    const res = await fetch(`http://localhost:8383/members/check?type=account&keyword=${idValue}`);
//    const flag = await res.json();
//
//    idFlag = flag;
// }
//
// // 계정 입력 검증
// const $idInput = document.getElementById('user_id');
// $idInput.addEventListener('keyup', async e => {
//
//     // 아이디 검사 정규표현식
//     const accountPattern = /^[a-zA-Z0-9]{4,14}$/;
//     //입력값 읽어오기
//     const idValue = $idInput.value;
//     // console.log(idValue)
//
//     // 검증 메세지를 입력할 SPAN
//     const $idChk = document.getElementById('idChk');
//     if(idValue.trim() === ''){
//         $idInput.style.borderColor = 'red';
//         console.log('아이디는 필수!!');
//         $idChk.innerHTML = '<b class = "warning">[아이디는 필수 값입니다.]</b>';
//     }else if(!accountPattern.test(idValue)){
//         $idInput.style.borderColor = 'red';
//         console.log('아이디는 영문의 4~14글자 사이');
//         $idChk.innerHTML = '<b class = warning>[아이디는 4~14글자 사이 영문, 숫자로 입력하세요]</b>';
//     }else{
//         // 아이디 중복검사
//         await fetchDuplicateCheck(idValue);
//
//         if(idFlag){
//             $idInput.style.borderColor = 'red';
//             $idChk.innerHTML = '<b class = warning>[아이디가 중복되었습니다.]</b>';
//         }else{
//             $idInput.style.borderColor = 'skyblue';
//             $idChk.innerHTML = '<b class = success>[사용가능한 아이디입니다.]</b>';
//         }
//
//     }
// });
//
// // async function fetchCorrectPassword(pwValue){
// //     const res = await fetch(`http://localhost:8383/members/check?type=account&keyword=${}`);
// //     const flag = await res.json();
// //
// //     idFlag = flag;
// // }
//
// // 비밀번호 검증
// const $pwInput = document.getElementById('password');
// const $checkPwInput = document.getElementById('password_check');
// $pwInput.addEventListener('keyup', async e => {
//
//     // 패스워드 검사 정규표현식
//     const passwordPattern = /([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/;
//
//     //입력값 읽어오기
//     const pwValue = $pwInput.value;
//     const checkPwValue = $checkPwInput.value;
//     // console.log(idValue)
//
//     // 검증 메세지를 입력할 SPAN
//     const $pwChk = document.getElementById('pwChk');
//     const $pwChk2 = document.getElementById('pwChk2');
//     if(pwValue.trim() === ''){
//         $pwInput.style.borderColor = 'red';
//         console.log('비밀번호는 필수입니다');
//         $pwChk.innerHTML = '<b class = "warning">[비밀번호는 필수 값입니다.]</b>';
//     }else if(!passwordPattern.test(pwValue)){
//         $pwInput.style.borderColor = 'red';
//         console.log('비밀번호는 특수문자를 입력해야합니다.');
//         $pwChk.innerHTML = '<b class = warning>[비밀번호는 특수문자를 입력하세요]</b>';
//     }else{
//
//         $pwInput.style.borderColor = 'skyblue';
//         console.log('비밀번호 입력 완료');
//         $pwChk.innerHTML = '<b class = success>[비밀번호 입력 완료]</b>';
//
//         // await fetchCorrectPassword(pwValue);
//         // checkSecondPw(pwValue, checkPwValue);
//         if(pwValue !== checkPwValue){
//             $checkPwInput.style.borderColor = 'red';
//             console.log('비밀번호가 일치하지 않습니다.');
//             $pwChk2.innerHTML = '<b class = "warning">[비밀번호가 일치하지 않습니다.]</b>';
//         }else{
//             $checkPwInput.style.borderColor = 'skyblue';
//             console.log('비밀번호가 일치합니다');
//             $pwChk2.innerHTML = '<b class = "success">[비밀번호 일치]</b>';
//         }
//     }
// });
//
// // async function checkSecondPw(pwValue, checkPwValue){
// //
// // }
//
//
// // 이름검사
// const $nameInput = document.getElementById('user_name');
// $nameInput.addEventListener('keyup', e=>{
//     // 이름 검사 정규표현식
//     const namePattern = /^[가-힣]+$/;
//
//     // 이름 입력값 불러오기
//     const nameValue = $nameInput.value;
//     const $nameChk = document.getElementById('nameChk');
//
//     if(nameValue.trim() === ''){
//         $nameInput.style.borderColor = 'red';
//         console.log('이름은 필수입니다');
//         $nameChk.innerHTML = '<b class = "warning">[이름은 필수 값입니다.]</b>';
//     } else if(nameValue.length > 6 || !namePattern.test(nameValue) ) {
//         $nameInput.style.borderColor = 'red';
//         console.log('한글 6글자 이상 적을 수 없습니다.');
//         $nameChk.innerHTML = '<b class = "warning">[한글 6글자 이상 적을 수 없습니다.]</b>';
//     }else{
//         $nameInput.style.borderColor = 'skyblue';
//         console.log('이름 입력 완료');
//         $nameChk.innerHTML = '<b class = "success">[이름 입력 완료.]</b>';
//     }
// });
//
// const $emailInput = document.getElementById('user_email');
// $emailInput.addEventListener('keyup', e=>{
//     // 이메일 검사 정규표현식
//     const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
//
//     // 이름 입력값 불러오기
//     const emailValue = $emailInput.value;
//     const $emailChk = document.getElementById('emailChk');
//
//     if(emailValue.trim() === ''){
//         $emailInput.style.borderColor = 'red';
//         console.log('이메일은 필수입니다');
//         $emailChk.innerHTML = '<b class = "warning">[이메일은 필수 값입니다.]</b>';
//     } else if(!emailPattern.test(emailValue)) {
//         $emailInput.style.borderColor = 'red';
//         console.log('이메일은 sji4205@naver.com 형식으로 입력되어아야합니다.');
//         $emailChk.innerHTML = '<b class = "warning">[이메일은 sji4205@naver.com 형식으로 입력되어아야합니다.]</b>';
//     }else{
//         $emailInput.style.borderColor = 'skyblue';
//         console.log('이메일 입력 완료');
//         $emailChk.innerHTML = '<b class = "success">[이메일 입력 완료.]</b>';
//     }
// });
//
// Function to check if the ID is duplicated
// let isValidated = false;
//
// async function fetchDuplicateCheck(idValue) {
//     const res = await fetch(`http://localhost:8383/members/check?type=account&keyword=${idValue}`);
//     return await res.json();
// }
//
// // Event listener for ID input validation
// let idValidated = false;
// const $idInput = document.getElementById('user_id');
// $idInput.addEventListener('keyup', async e => {
//     const accountPattern = /^[a-zA-Z0-9]{4,14}$/;
//     const idValue = $idInput.value;
//     const $idChk = document.getElementById('idChk');
//
//     if (idValue.trim() === '') {
//         $idInput.style.borderColor = 'red';
//         $idChk.innerHTML = '<b class="warning">[아이디는 필수 값입니다.]</b>';
//     } else if (!accountPattern.test(idValue)) {
//         $idInput.style.borderColor = 'red';
//         $idChk.innerHTML = '<b class="warning">[아이디는 4~14글자 사이 영문, 숫자로 입력하세요]</b>';
//     } else {
//         const isDuplicate = await fetchDuplicateCheck(idValue);
//         if (isDuplicate) {
//             $idInput.style.borderColor = 'red';
//             $idChk.innerHTML = '<b class="warning">[아이디가 중복되었습니다.]</b>';
//         } else {
//             $idInput.style.borderColor = 'skyblue';
//             $idChk.innerHTML = '<b class="success">[사용가능한 아이디입니다.]</b>';
//             return idValidated = true;
//         }
//     }
// });
//
// // Function to validate passwords
// let pwValidated = false;
// function validatePasswords() {
//     const passwordPattern = /([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/;
//     const pwValue = $pwInput.value;
//     const checkPwValue = $checkPwInput.value;
//     const $pwChk = document.getElementById('pwChk');
//     const $pwChk2 = document.getElementById('pwChk2');
//
//     if (pwValue.trim() === '') {
//         $pwInput.style.borderColor = 'red';
//         $pwChk.innerHTML = '<b class="warning">[비밀번호는 필수 값입니다.]</b>';
//     } else if (!passwordPattern.test(pwValue)) {
//         $pwInput.style.borderColor = 'red';
//         $pwChk.innerHTML = '<b class="warning">[비밀번호는 특수문자를 입력하세요]</b>';
//     } else {
//         $pwInput.style.borderColor = 'skyblue';
//         $pwChk.innerHTML = '<b class="success">[비밀번호 입력 완료]</b>';
//
//         if (pwValue !== checkPwValue) {
//             $checkPwInput.style.borderColor = 'red';
//             $pwChk2.innerHTML = '<b class="warning">[비밀번호가 일치하지 않습니다.]</b>';
//         } else {
//             $checkPwInput.style.borderColor = 'skyblue';
//             $pwChk2.innerHTML = '<b class="success">[비밀번호 일치]</b>';
//             return pwValidated = true;
//         }
//     }
// }
//
// // Event listeners for password validation
// const $pwInput = document.getElementById('password');
// const $checkPwInput = document.getElementById('password_check');
// $pwInput.addEventListener('keyup', validatePasswords);
// $checkPwInput.addEventListener('keyup', validatePasswords);
//
// // Event listener for name validation
// const $nameInput = document.getElementById('user_name');
// let nameValidated = false;
// $nameInput.addEventListener('keyup', e => {
//     const namePattern = /^[가-힣]+$/;
//     const nameValue = $nameInput.value;
//     const $nameChk = document.getElementById('nameChk');
//
//     if (nameValue.trim() === '') {
//         $nameInput.style.borderColor = 'red';
//         $nameChk.innerHTML = '<b class="warning">[이름은 필수 값입니다.]</b>';
//     } else if (nameValue.length > 6 || !namePattern.test(nameValue)) {
//         $nameInput.style.borderColor = 'red';
//         $nameChk.innerHTML = '<b class="warning">[한글 6글자 이상 적을 수 없습니다.]</b>';
//     } else {
//         $nameInput.style.borderColor = 'skyblue';
//         $nameChk.innerHTML = '<b class="success">[이름 입력 완료.]</b>';
//         return nameValidated = true;
//     }
// });
//
// // Event listener for email validation
// const $emailInput = document.getElementById('user_email');
// let emailValidated = false;
// $emailInput.addEventListener('keyup', e => {
//     const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
//     const emailValue = $emailInput.value;
//     const $emailChk = document.getElementById('emailChk');
//
//     if (emailValue.trim() === '') {
//         $emailInput.style.borderColor = 'red';
//         $emailChk.innerHTML = '<b class="warning">[이메일은 필수 값입니다.]</b>';
//     } else if (!emailPattern.test(emailValue)) {
//         $emailInput.style.borderColor = 'red';
//         $emailChk.innerHTML = '<b class="warning">[이메일은 sji4205@naver.com 형식으로 입력되어야 합니다.]</b>';
//     } else {
//         $emailInput.style.borderColor = 'skyblue';
//         $emailChk.innerHTML = '<b class="success">[이메일 입력 완료.]</b>';
//         return emailValidated = true;
//     }
// });
//
// const $signUpBtn = document.getElementById('signup-btn');
// isValidated = idValidated&&pwValidated&&nameValidated&&emailValidated;
// if(isValidated){
//     $signUpBtn.style.backgroundColor = "skyblue";
// }
let idValidated = false;
let pValidated = false;
let pwValidated = false;
let nameValidated = false;
let emailValidated = false;

// Function to check if the ID is duplicated
async function fetchDuplicateCheck(idValue) {
    const res = await fetch(`http://localhost:8383/members/check?type=account&keyword=${idValue}`);
    return await res.json();
}

// Function to update the sign-up button state
function updateSignUpButtonState() {
    const isValidated = idValidated && pwValidated && nameValidated && emailValidated;
    if (isValidated) {
        $signUpBtn.style.backgroundColor = "skyblue";
        $signUpBtn.disabled = false;
    } else {
        $signUpBtn.style.backgroundColor = "gray";
        $signUpBtn.disabled = true;
    }
}

// Event listener for ID input validation
const $idInput = document.getElementById('user_id');
$idInput.addEventListener('keyup', async e => {
    const accountPattern = /^[a-zA-Z0-9]{4,14}$/;
    const idValue = $idInput.value;
    const $idChk = document.getElementById('idChk');

    if (idValue.trim() === '') {
        $idInput.style.borderColor = 'red';
        $idChk.innerHTML = '<b class="warning">[아이디는 필수 값입니다.]</b>';
        idValidated = false;
    } else if (!accountPattern.test(idValue)) {
        $idInput.style.borderColor = 'red';
        $idChk.innerHTML = '<b class="warning">[아이디는 4~14글자 사이 영문, 숫자로 입력하세요]</b>';
        idValidated = false;
    } else {
        const isDuplicate = await fetchDuplicateCheck(idValue);
        if (isDuplicate) {
            $idInput.style.borderColor = 'red';
            $idChk.innerHTML = '<b class="warning">[아이디가 중복되었습니다.]</b>';
            idValidated = false;
        } else {
            $idInput.style.borderColor = 'skyblue';
            $idChk.innerHTML = '<b class="success">[사용가능한 아이디입니다.]</b>';
            idValidated = true;
        }
    }
    updateSignUpButtonState();
});

// Function to validate passwords
function validatePasswords() {
    const passwordPattern = /([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/;
    const pwValue = $pwInput.value;
    const checkPwValue = $checkPwInput.value;
    const $pwChk = document.getElementById('pwChk');
    const $pwChk2 = document.getElementById('pwChk2');

    if (pwValue.trim() === '') {
        $pwInput.style.borderColor = 'red';
        $pwChk.innerHTML = '<b class="warning">[비밀번호는 필수 값입니다.]</b>';
        pwValidated = false;
    } else if (!passwordPattern.test(pwValue)) {
        $pwInput.style.borderColor = 'red';
        $pwChk.innerHTML = '<b class="warning">[비밀번호는 특수문자를 입력하세요]</b>';
        pwValidated = false;
    } else {
        $pwInput.style.borderColor = 'skyblue';
        $pwChk.innerHTML = '<b class="success">[비밀번호 입력 완료]</b>';
        if (pwValue !== checkPwValue) {
            $checkPwInput.style.borderColor = 'red';
            $pwChk2.innerHTML = '<b class="warning">[비밀번호가 일치하지 않습니다.]</b>';
            pwValidated = false;
        } else {
            $checkPwInput.style.borderColor = 'skyblue';
            $pwChk2.innerHTML = '<b class="success">[비밀번호 일치]</b>';
            pwValidated = true;
        }
    }
    updateSignUpButtonState();
}

// Event listeners for password validation
const $pwInput = document.getElementById('password');
const $checkPwInput = document.getElementById('password_check');
$pwInput.addEventListener('keyup', validatePasswords);
$checkPwInput.addEventListener('keyup', validatePasswords);

// Event listener for name validation
const $nameInput = document.getElementById('user_name');
$nameInput.addEventListener('keyup', e => {
    const namePattern = /^[가-힣]+$/;
    const nameValue = $nameInput.value;
    const $nameChk = document.getElementById('nameChk');

    if (nameValue.trim() === '') {
        $nameInput.style.borderColor = 'red';
        $nameChk.innerHTML = '<b class="warning">[이름은 필수 값입니다.]</b>';
        nameValidated = false;
    } else if (nameValue.length > 6 || !namePattern.test(nameValue)) {
        $nameInput.style.borderColor = 'red';
        $nameChk.innerHTML = '<b class="warning">[한글 6글자 이상 적을 수 없습니다.]</b>';
        nameValidated = false;
    } else {
        $nameInput.style.borderColor = 'skyblue';
        $nameChk.innerHTML = '<b class="success">[이름 입력 완료.]</b>';
        nameValidated = true;
    }
    updateSignUpButtonState();
});

// Event listener for email validation
const $emailInput = document.getElementById('user_email');
$emailInput.addEventListener('keyup', e => {
    const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    const emailValue = $emailInput.value;
    const $emailChk = document.getElementById('emailChk');

    if (emailValue.trim() === '') {
        $emailInput.style.borderColor = 'red';
        $emailChk.innerHTML = '<b class="warning">[이메일은 필수 값입니다.]</b>';
        emailValidated = false;
    } else if (!emailPattern.test(emailValue)) {
        $emailInput.style.borderColor = 'red';
        $emailChk.innerHTML = '<b class="warning">[이메일은 sji4205@naver.com 형식으로 입력되어야 합니다.]</b>';
        emailValidated = false;
    } else {
        $emailInput.style.borderColor = 'skyblue';
        $emailChk.innerHTML = '<b class="success">[이메일 입력 완료.]</b>';
        emailValidated = true;
    }
    updateSignUpButtonState();
});

// Initial state of the sign-up button
const $signUpBtn = document.getElementById('signup-btn');
updateSignUpButtonState();
