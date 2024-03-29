"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const homePage_1 = require("../pageFactory/homePage/homePage");
const enterDetailsPage_1 = require("../pageFactory/enterDetails/enterDetailsPage");
const selectPaymentPage_1 = require("../pageFactory/selectPayment/selectPaymentPage");
const selectPaymentActions_1 = require("../pageFactory/selectPayment/selectPaymentActions");
describe("pillowPaymentSuccess", () => __awaiter(this, void 0, void 0, function* () {
    it("Open Application", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get("https://demo.midtrans.com/");
    }));
    it("Validate and Click on Buy Now", () => __awaiter(this, void 0, void 0, function* () {
        const home = new homePage_1.homePage();
        yield home.validateButton();
        yield home.clickBuyNow();
    }));
    it("Validate and Click on Checkout", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const cart = new enterDetailsPage_1.enterDetailsPage();
        yield cart.validateCheckoutButton();
        yield cart.clickCheckout();
    }));
    it("Switch to Payment iFrame", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const pay1 = new selectPaymentPage_1.selectPaymentPage();
        yield pay1.selectPaymentFrame();
    }));
    it("Click on Continue Button", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const pay = new selectPaymentPage_1.selectPaymentPage();
        yield pay.validateContinueButton();
        yield pay.clickContinuePay();
    }));
    it("Select Credit Card from list of Payment Methods", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const pay2 = new selectPaymentPage_1.selectPaymentPage();
        yield pay2.clickCreditCardButton();
    }));
    it("Enter Credit Card Details", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const pay2 = new selectPaymentPage_1.selectPaymentPage();
        const pay = new selectPaymentActions_1.selectPaymentActions();
        yield pay.enterCardNumber("4811111111111114");
        /*        await pay2.enterCCNumber();*/
        yield pay2.enterExpiryDate();
        yield pay2.enterCVVCode();
    }));
    it("Click on Pay Now", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const pay = new selectPaymentPage_1.selectPaymentPage();
        yield pay.clickContinuePay();
    }));
    it("Remain in Payment iFrame", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const pay1 = new selectPaymentPage_1.selectPaymentPage();
        yield pay1.selectPaymentFrame();
    }));
    it("Enter 3DS PIN", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const pay2 = new selectPaymentPage_1.selectPaymentPage();
        yield pay2.enter3DSCode();
    }));
    it("Click 3DS OK Button", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const pay = new selectPaymentPage_1.selectPaymentPage();
        yield pay.click3DSOK();
    }));
    it("Remain in Payment iFrame", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const pay1 = new selectPaymentPage_1.selectPaymentPage();
        yield pay1.selectPaymentFrame();
    }));
    it("Check Transaction Success Status", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        const status = new selectPaymentPage_1.selectPaymentPage();
        yield status.getTransactionStatusSuccess();
    }));
}));
//# sourceMappingURL=TC_01_paymentSuccess.js.map