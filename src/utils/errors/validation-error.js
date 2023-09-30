const { StatusCodes } = require("http-status-codes");

class ValidationError extends Error {
  constructor(error) {
    super();
    let explanation = [];
    error.errors.forEach((element) => {
      explanation.push(element.message);
    });
    this.name = "Validation error";
    this.message = "Not able to validate the data sent in the request ";
    this.explanation = explanation;
    this.statuscode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = ValidationError;
