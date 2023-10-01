const { StatusCodes } = require("http-status-codes");
const { Booking } = require("../models/index");
const { ValidationError, AppError } = require("../utils/errors/index");

class BookingRepository {
  async create(data) {
    try {
      const booking = await Booking.create();
      return booking;
    } catch (error) {
      if ((error.name = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
      throw new AppError(
        "Repository Error ",
        "Cannot create Booking",
        "There was some issue creating the booking ",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(data) {
    try {
      const booking = await Booking.create();
      return booking;
    } catch (error) {
      if ((error.name = "SequelizeValidationError")) {
        throw new ValidationError(error);
      }
      throw new AppError(
        "Repository Error ",
        "Cannot create Booking",
        "There was some issue creating the booking ",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

module.exports = BookingRepository;
