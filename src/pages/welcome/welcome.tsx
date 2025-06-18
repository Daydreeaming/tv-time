import * as React from 'react';
import { Button } from '@mui/material';
import { SiTvtime  } from "react-icons/si";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HasAccount from '../pop-ups/has-account/has-account';
import Login from '../pop-ups/login/login';
import CreateUser from '../pop-ups/create-user/create-user';

function Welcome() {
    const [index, setIndex] = React.useState(0);

    const [openHasAccount, setOpenHasAccount] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openSignUp, setOpenSignUp] = React.useState(false);

    const handleClickOpen = () => {
        setOpenHasAccount(true);
    };

    const handleSignIn = () => {
        setOpenLogin(true);
        setOpenHasAccount(false);
    };

    const handleSignUp = () => {
        setOpenSignUp(true);
        setOpenHasAccount(false);        
    };
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % 5);
        }, 4000)

        return () => clearInterval(timer);
    }, []);

    const stringsWelcome = [
        "Nunca perca um episódio",
        "Descubra sua nova série favorita",
        "Ajude a melhorar ainda mais suas séries favoritas",
        "Acompanhe seus filmes e séries",
        "Lembre onde você parou",
    ];

    const iconsStrings = [
        <NotificationsNoneOutlinedIcon />,
        <FavoriteBorderOutlinedIcon />,
        <ThumbUpOutlinedIcon />,
        <CheckCircleOutlinedIcon />,
        <CalendarMonthOutlinedIcon />,
    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="flex flex-col bg-black w-full h-full max-w-5xl items-center justify-between p-8">
                <div className="flex flex-row justify-center items-center w-full mb-8">
                    <SiTvtime className="text-2xl md:text-4xl mr-2" />
                    <span className="font-nunito md:text-4xl text-sm font-bold text-white">TV TIME</span>
                </div>
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="flex items-center justify-center w-10 h-10 md:w-15 md:h-15 rounded-full bg-black border border-white mb-4">
                        {iconsStrings[index]}
                    </div>
                    <div className="font-nunito font-bold text-xl md:text-2xl text-white text-center">
                        <span>{stringsWelcome[`${index}`]}</span>
                    </div>
                </div>
                <Button onClick={handleClickOpen} className="text-1xl bg-gold-500 text-black font-nunito font-bold px-8 py-2 rounded-full shadow hover:brightness-95 transition">
                    CADASTRAR-SE/FAZER LOGIN
                </Button>
                {<HasAccount open={openHasAccount} onSignIn={handleSignIn} onSignUp={handleSignUp} onClose={() => setOpenHasAccount(false)} />}
                {<Login open={openLogin} onClose={() => setOpenLogin(false)} />}
                {<CreateUser open={openSignUp} onClose={() => setOpenSignUp(false)} />}
            </div>
        </div>
    )
}

export default Welcome;