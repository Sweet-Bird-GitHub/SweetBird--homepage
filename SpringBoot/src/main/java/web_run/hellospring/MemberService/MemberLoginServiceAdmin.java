package web_run.hellospring.MemberService;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import web_run.hellospring.google_API.join;

import java.io.IOException;
import java.security.GeneralSecurityException;

@Service
@RequiredArgsConstructor
public class MemberLoginServiceAdmin implements MemberLonginService {
    private final join Join = new join();
    @Override
    public  boolean AdminLogin(String ID, String PASSWERD) throws GeneralSecurityException, IOException {
        String []login=Join.AdminMember();
        if(login[0].equals(ID)&&login[1].equals(PASSWERD))
        {
            return true;
        }
        return false;
    }
}
