import type { ContactUsEnum } from '../../../../enum/contact-us-enum.enum';

export interface ContackUsCreateDto {
  contackUsTypeId: ContactUsEnum;
  body: string;
}
