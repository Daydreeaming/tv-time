import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

type HasAccountProps = {
  open: boolean;
  onClose: () => void;
};

function HasAccount({ open, onClose }: HasAccountProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Já possui conta?</DialogTitle>
      <DialogContent>
        {/* Conteúdo do popup */}
      </DialogContent>
    </Dialog>
  );
}

export default HasAccount;