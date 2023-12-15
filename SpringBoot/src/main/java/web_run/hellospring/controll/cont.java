package web_run.hellospring.controll;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import web_run.hellospring.MemberService.MemberLoginServiceAdmin;
import web_run.hellospring.MemberService.MemberLonginService;
import web_run.hellospring.google_API.join;

import java.io.IOException;
import java.security.GeneralSecurityException;

@Controller
@RequiredArgsConstructor
public class cont {
    // 다른 객체생기면 에노테이션 넣기
     private final MemberLonginService MLS = new MemberLoginServiceAdmin();
    @GetMapping("/")
    public String start() {
        return "SweetHtml/home";
    }

    @GetMapping("/new/member")
    public String Login() {
        return "SweetHtml/login";
       // return "SweetHtml/YesAdmin";

    }

    @PostMapping("/new/member")
    @ResponseBody
    public String AdminAccess(@RequestParam("Id") String Id, @RequestParam("Password") String Password) throws GeneralSecurityException, IOException {


        if (MLS.AdminLogin(Id,Password))
        {
           return "/Yes/Admin";
        }

        return "/new/member";
    }


    @GetMapping("/Yes/Admin")
    public String YesAdmin()
    {
        return "/SweetHtml/YesAdmin";
    }

}