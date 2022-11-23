import { Messages } from "../interfaces/variables";
export function customMessage(code: number): string {
  let message: string;
  switch (code) {
    case 1:
      message = Messages.error_one;
      break;
    case 2:
      message = Messages.error_two;
      break;
    case 3:
      message = Messages.error_three;
      break;
    case 4:
      message = Messages.error_four;
      break;
    case 5:
      message = Messages.error_five;
      break;
    case 6:
      message = Messages.error_six;
      break;
    case 7:
      message = Messages.error_seven;
      break;
    case 8:
      message = Messages.error_eight;
      break;
    case 9:
      message = Messages.error_nine;
      break;
    case 10:
      message = Messages.error_ten;
      break;
    case 11:
      message = Messages.error_special;
      break;
    default:
      message = Messages.error_special;
      break;
  }
  return message;
}
