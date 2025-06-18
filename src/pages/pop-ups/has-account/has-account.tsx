// import * as React from 'react';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { Clapperboard } from "lucide-react";
import Login from '../login/login';

type HasAccountProps = {
  open: boolean;
  onClose: () => void;
  onSignIn: () => void;
  onSignUp: () => void;
};

function HasAccount({ open, onClose, onSignIn, onSignUp }: HasAccountProps) {
  const [openLogin, setOpenLogin] = React.useState(false);

  return (
    <Dialog open={open}>
      <DialogContent className="bg-black border-4 border-[#8A2E16] p-6 max-w-md text-center text-white shadow-2xl">
        <div className="border-[3px] border-geebung-300 rounded-lg p-6 relative">
          <Clapperboard className="mx-auto mb-4 text-yellow-500" size={40} />
           <h2 className="text-2xl font-bold uppercase text-yellow-500 mb-2">
            Already have an account?
          </h2>
           <p className="text-gray-300 mb-6">
            Sign in now and continue your cinematic journey!
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-[#8A2E16] text-yellow-300 hover:bg-[#a94028] font-semibold flex items-center gap-2 px-6" onClick={onSignIn}> 
              <Clapperboard className="w-5 h-5" />
              Sign In
            </Button>
            {openLogin && <Login open={openLogin} onClose={() => setOpenLogin(false)} />}
            <Button className="text-gray-300 hover:underline" onClick={onClose}>Cancel</Button>
          </div>
          <div className="flex items-center justify-center mt-4">
            <span>Don’t have an account? </span>
            <Button className="hover:underline ml-2 text-yellow-300" onClick={onSignUp}>Sign up</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default HasAccount;