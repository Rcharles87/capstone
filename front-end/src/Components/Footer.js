// import "../Styles/footer.css"
import "./footer.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__itemsContainer'>
          {/* <div className="footer__line"></div> */}
            <>
              <p>About Me</p>
            </>
            <>
              <p>Meals 4 NYC </p>
            </>
            <div className='footer__socialLinks'>
                <GitHubIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
            </div>
        </div>
    </div>
  )
}

export default Footer