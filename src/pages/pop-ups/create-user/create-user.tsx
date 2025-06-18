import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';

type CreateUserProps = {
  open: boolean;
  onClose: () => void;
};

function CreateUser({open}: CreateUserProps) {
  return (
      <Dialog open={open}></Dialog>
  );
}

export default CreateUser;