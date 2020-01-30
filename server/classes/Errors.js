/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e32d4e4486dba413b7b36c3
*
* You will get 10% discount for each one of your friends
* 
*/
import SafeError from "./SafeError";
import ErrorMessages from "./ErrorMessages";

/**
 * Create custom error dynamically base on ./ErrorMessages.js
 * EXAMPLE: throw new Errors.JWT_EXPIRED()
 */
const Errors = Object.entries(ErrorMessages).reduce((errors, [k, v]) => {
  const name = k;
  errors[k] = class k extends SafeError {
    constructor(message = v.message, status = v.status) {
      super({
        message: message,
        status: status,
        name: name
      });
    }
  };
  return errors;
}, {});

export default Errors;
