package com.study.springstudy.springmvc.chap05.api;

import com.study.springstudy.springmvc.chap05.dto.request.SignUpDto;
import com.study.springstudy.springmvc.chap05.service.MemberService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
@RequiredArgsConstructor
@Controller
@RequestMapping("/members")
@Slf4j
public class MemberController {

    private final MemberService memberService;

    // 회원가입 양식 열기
    @GetMapping("/sign-up")
//    @ResponseBody
    // url이 jsp경로와 같으면 void로 설정해도 알아서 위에꺼 가져와서 열기 가능
    public void signUp(){
        log.info("/members/sign-up GET : forwarding to sign-up.jsp");
        //return "members/sign-up";
    }

    // 회원가입 요청 처리
    @PostMapping("/sign-up")
    public String signUp(SignUpDto dto){
        log.info("/members/sign-up POST ");
        log.debug("parameter: {}", dto);

        boolean flag = memberService.join(dto);

        return flag? "redirect:/board/list" : "redirect:/members/sign-up";
    }

    // 아이디, 이메일 중보ㅓㅁ사 비동기 요청처리
    @GetMapping("/check")
    @ResponseBody
    public ResponseEntity<?> check(String type, String keyword){
        boolean flag = memberService.checkIdentifier(type, keyword);
        log.info("{} 중복체크 결과? {}" , type, flag);
        return ResponseEntity.ok().body(flag);
    }
}
