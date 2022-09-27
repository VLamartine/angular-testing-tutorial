import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  let calculator: CalculatorService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });

    calculator = TestBed.inject(CalculatorService);
  });

  it("should add two numbers", () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2, "Unexpected subtraction result");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
