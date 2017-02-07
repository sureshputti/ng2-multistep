"use strict";
var MultistepFormClass = (function () {
    function MultistepFormClass(multistepService) {
        this.multistepService = multistepService;
        this.model = {};
        this.formErrors = {
            'street': '',
            'city': '',
            'name': '',
            'firstName': '',
            'lastName': ''
        };
    }
    MultistepFormClass.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    MultistepFormClass.prototype.formChanged = function () {
        var _this = this;
        if (!this.latestForm)
            return;
        if (this.latestForm === this.form)
            return;
        ;
        this.form = this.latestForm;
        if (this.form)
            this.form.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    MultistepFormClass.prototype.onValueChanged = function (data) {
        if (!this.form)
            return;
        var form = this.form.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            this.multistepService.stateUpdateStream.next({ dirty: true, isValid: control && control.valid });
            if (control && control.dirty && !control.valid) {
            }
        }
    };
    return MultistepFormClass;
}());
exports.MultistepFormClass = MultistepFormClass;
//# sourceMappingURL=multistep.form-class.js.map