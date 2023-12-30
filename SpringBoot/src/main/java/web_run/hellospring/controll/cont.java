package web_run.hellospring.controll;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import web_run.hellospring.MemberService.MemberLoginServiceAdmin;
import org.springframework.beans.factory.annotation.Autowired;
import java.io.IOException;
import java.security.GeneralSecurityException;

@Controller

public class cont {
    // 다른 객체생기면 에노테이션 넣기
     @Autowired
     private  MemberLoginServiceAdmin MLS;


    public cont(MemberLoginServiceAdmin ME){this.MLS=ME;}
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