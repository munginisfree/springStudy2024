
// 회원가입 입력 검증 처리
let idFlag = false;

// 계정 중복검사 비동기 요청 보내기
async function fetchDuplicateCheck(idValue){
   const res = await fetch(`http://localhost:8383/members/check?type=account&keyword=${idValue}`);
   const flag = await res.json();

   idFlag = flag;
}

// 계정 입력 검증
const $idInput = document.getElementById('user_id');
$idInput.addEventListener('keyup', async e => {

    // 아이디 검사 정규표현식
    const accountPattern = /^[a-zA-Z0-9]{4,14}$/;
    //입력값 읽어오기
    const idValue = $idInput.value;
    // console.log(idValue)

    // 검증 메세지를 입력할 SPAN
    const $idChk = document.getElementById('idChk');
    if(idValue.trim() === ''){
        $idInput.style.borderColor = 'red';
        console.log('아이디는 필수!!');
        $idChk.innerHTML = '<b class = "warning">[아이디는 필수 값입니다.]</b>';
    }else if(!accountPattern.test(idValue)){
        $idInput.style.borderColor = 'red';
        console.log('아이디는 영문의 4~14글자 사이');
        $idChk.innerHTML = '<b class = warning>[아이디는 4~14글자 사이 영문, 숫자로 입력하세요]</b>';
    }else{
        // 아이디 중복검사
        await fetchDuplicateCheck(idValue);

        if(idFlag){
            $idInput.style.borderColor = 'red';
            $idChk.innerHTML = '<b class = warning>[아이디가 중복되었습니다.]</b>';
        }else{
            $idInput.style.borderColor = 'skyblue';
            $idChk.innerHTML = '<b class = success>[사용가능한 아이디입니다.]</b>';
        }

    }
});