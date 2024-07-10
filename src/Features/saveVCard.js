import Data from "Entites/Data";
import { saveAs } from "file-saver";
const { name, surname, patronymic, main_number, mail, address } = Data.person;
const fullName = `${name} ${surname} ${patronymic}`;
function saveVCard() {
  const vCardContent = `
    BEGIN:VCARD
    VERSION:3.0
    FN:${fullName}
    TEL;TYPE=CELL:${main_number}
    EMAIL:${mail}
    ADR:${address}
    END:VCARD
  `;
  const blob = new Blob([vCardContent], { type: "text/vcard" });
  saveAs(blob, "contact.vcf");
}

export default saveVCard;
