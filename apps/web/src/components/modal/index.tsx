import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  prediction: number | undefined;
}

export function Modal({ open, setOpen, prediction }: ModalProps) {
  const phone = "5527992610099";
  const text = encodeURIComponent(
    `Olá! Tudo bem? Fiz uma pré-avaliação do meu imóvel pelo site e obtive o valor estimado de *R$${prediction}*.`
  );
  const whatsappList = `https://api.whatsapp.com/send/?phone=${phone}&text=${text}`;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <img src="logo.svg" className="w-6 h-6" alt="logo" />
            Avaliação do Imóvel
          </DialogTitle>
          <DialogDescription>
            Utilizamos as informações fornecidas para calcular uma estimativa do
            valor do seu imóvel. Confira o resultado abaixo:
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-2xl font-semibold text-gray-800">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(prediction ? prediction : 0)}
          </div>

          <a
            href={whatsappList}
            target="_blank"
            className="flex items-center gap-2"
          >
            <img src="/whatsapp.svg" alt="Whatsapp icon" className="w-6 h-6" />
            <p className="font-semibold text-lg hover:text-green-700 transition-all duration-150">
              Falar com um corretor
            </p>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
