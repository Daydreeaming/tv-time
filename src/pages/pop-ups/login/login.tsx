import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

type LoginProps = {
  open: boolean;
  onClose: () => void;
};

function Login({ open }: LoginProps) {
    return(
        <Dialog open={open}>
            <DialogContent className="bg-black border-4 border-[#8A2E16] p-6 max-w-md text-center text-white shadow-2xl">
                <div className="border-[3px] border-geebung-300 rounded-lg p-6 relative">

                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Login;