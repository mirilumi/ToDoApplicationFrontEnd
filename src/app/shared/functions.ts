import swal from 'sweetalert2';
import { UrlTree, UrlSegmentGroup, UrlSegment, Router, PRIMARY_OUTLET } from '@angular/router';
declare var $: any;

export class HelperFunctions {
 //Check if array or string is empty or undefined
 static IsEmptyOrUndefined(valueToCheck: any): boolean {
    return valueToCheck === 'undefined' || valueToCheck === undefined || valueToCheck === null || valueToCheck === '' || (Array.isArray(valueToCheck) && valueToCheck.length == 0);
}

//Search applications or application subscriptions
static searchFilter(searchKey: string, searchFrom: Array<any>): Array<any> {

    let retList: Array<any> = [];

    //If applications object is undefined search apps, else search app subscriptions
    if (searchFrom.length > 0 && this.IsEmptyOrUndefined(searchFrom[0].application)) {
        if (searchKey.trim() == '') {
            retList = searchFrom.map(x => Object.assign({}, x));
        }
        else {
            retList = searchFrom.filter(function (element) {
                return element.name.toLowerCase().indexOf(searchKey.toLowerCase()) != -1;
            });
        }
    }
    else {
        if (searchKey.trim() == '') {
            retList = searchFrom.map(x => Object.assign({}, x));
        }
        else {
            retList = searchFrom.filter(function (element) {
                return element.application.name.toLowerCase().indexOf(searchKey.toLowerCase()) != -1;
            });
        }
    }

    return retList;
}

//Get date formated yyyy-MM-dd
static getDateFormated(dateToFormat: Date): string {
    const _dob: Date = new Date(dateToFormat);

    const dd = _dob.getDate();
    const MM = _dob.getMonth() + 1;
    const yyyy = _dob.getFullYear();

    return [yyyy, (MM > 9 ? '' : '0') + MM, (dd > 9 ? '' : '0') + dd].join('-');
}

//Get date formated yyyy-MM-dd,hh-mm-ss
static getDateTimeFormated(dateToFormat: any): string {
    const _date: Date = new Date(dateToFormat);

    const dd = _date.getDate();
    const MM = _date.getMonth() + 1;
    const yyyy = _date.getFullYear();
    const hh = _date.getHours();
    const mm = _date.getMinutes();
    const ss = _date.getSeconds();

    return yyyy + '-' + MM + '-' + dd + ',' + hh + '-' + mm + '-' + ss;
}

static addZeros(number, width) {
    width -= number.toString().length;
    if (width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + ''; // always return a string
}


//Get file extension
static getFileExtension(uploadedFile: File): string {
    return uploadedFile.name.substring(uploadedFile.name.lastIndexOf('.') + 1);
}

//Intersect arrays
static intersectArrays(firstArray: Array<any>, secondArray: Array<any>): Array<any> {
    const retList: Array<any> = [];

    firstArray.forEach(element => {
        if (secondArray.find(el => el.id == element.id)) {
            retList.push(element);
        }
    });

    return retList;
}

//Get the difference of arrays which are in first array but not the second
static getArraysDifference(firstArray: Array<any>, secondArray: Array<any>, firstColumnToSearch: string = 'id', secondColumnToSearch?: string): Array<any> {
    const retList: Array<any> = [];

    firstArray.forEach(element => {
        if (secondColumnToSearch) {
            if (!secondArray.find(el => el[firstColumnToSearch][secondColumnToSearch] == element[firstColumnToSearch][secondColumnToSearch])) {
                retList.push(element);
            }
        }
        else {
            if (!secondArray.find(el => el[firstColumnToSearch] == element[firstColumnToSearch])) {
                retList.push(element);
            }
        }
    });

    return retList;
}

//Check if two arrays contains the same elements
static equalArrays(firstArray: Array<any>, secondArray: Array<any>): boolean {

    if (firstArray.length != secondArray.length) {
        return false;
    }
    else {
        const arrayLength = firstArray.length;

        if (this.intersectArrays(firstArray, secondArray).length == arrayLength) {
            return true;
        }
        else {
            return false;
        }
    }
}

//Get the last element of array
static lastElementOfArray(arrayToCheck: Array<any>, elementToCheck: any, columnToCheck: string): boolean {
    if (this.IsEmptyOrUndefined(arrayToCheck)) {
        return false;
    }
    else {
        return elementToCheck[columnToCheck] == arrayToCheck[arrayToCheck.length - 1][columnToCheck];
    }
}

//Display swal success message
static DisplayToastMessageSuccess(successMessage: string, title?: string): void {
    swal({
        title: title || 'Successfully saved !',
        text: successMessage,
        type: 'success',
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: 'top-right',
        customClass:'swal-wide'
    });
}
static DisplayToastMessageSuccessDeleted(successMessage: string, title?: string): void {
    swal({
        title: title || 'Successfully deleted !',
        text: successMessage,
        type: 'success',
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: 'top-right',
        customClass:'swal-wide'
    });
}
static DisplayToastMessageSuccessUpdated(successMessage: string, title?: string): void {
    swal({
        title: title || 'Successfully updated !',
        text: successMessage,
        type: 'success',
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: 'top-right',
        customClass:'swal-wide'
    });
}
//Display swal error message
static DisplayToastMessageError(errorMessage: string, title?: string): void {
    swal({
      title: title || 'Error !',
      text: errorMessage,
      type: 'error',
      timer: 3000,
      showConfirmButton: false,
      toast : true,
      position : 'top-right',
      customClass:'swal-wide'
    });
}

//Display information message not toasty
static DisplayInfoMessage(infoTitle: string, infoText: string): Promise<any> {
    return swal({
        title: infoTitle,
        text: infoText,
        type: 'info',
        allowEscapeKey: false,
        allowOutsideClick: false
    });
}

static DisaplayToastInfoMessage(infoTitle: string, infoText: string): Promise<any> {
    return swal({
        type: 'info',
        title: infoTitle,
        text: infoText,
        toast: true,
        showConfirmButton: false,
        position: 'top-right',
        timer: 3000
    })
}

//Display warning confirmation message
static DisplayWarningMessageConfirm(warningTitle: string, warningText: string): Promise<any> {
    return swal({
        title: warningTitle,
        text: warningText,
        type: 'warning',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn btn-primary margin-right-base',
        buttonsStyling: false
    });
}

//Display warning  message
static DisplayWarningMessage(warningText: string, warningTitle?: string): Promise<any> {
    return swal({
        title : warningTitle || 'Warning !',
        text : warningText ,
        type : 'warning',
        timer: 3000,
        showConfirmButton: false,
        toast : true,
        position : 'top-right'
    });
}

//Display confirmation dialog
static DisplayConfirmMessage(confirmTitle: string, confirmMessage: string): Promise<any> {
    return swal({
        title: confirmTitle,
        text: confirmMessage,
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn btn-primary margin-right-base',
        buttonsStyling: false
    });
}

static DisplayErrorMessageWithDetails(errorMessage: string, detailedMessage: string) {
    swal({
        title: 'Error',
        type: 'error',
        html: '<p>' + errorMessage + '</p>' +
              '<div class="panel panel-default small"><a data-toggle="collapse" aria-expanded="false" href="#message">Show/hide detailed message <i class="material-icons">keyboard_arrow_down</i></a></div>' +
              '<div class="collapse small" id="message">' + detailedMessage + '</div>',
        confirmButtonClass: 'btn btn-primary',
        confirmButtonText: 'Dismiss',
        buttonsStyling: false,
        });
}

//Display About dialog
static ableAboutPopup() {
  return swal({
    title: 'About',
    text: 'Able+ version 1.02',
    showCancelButton: true,
    showConfirmButton: false,
    cancelButtonText: 'Close',
    cancelButtonClass: 'btn btn-primary',
    buttonsStyling: false
  });
}

//Encode HTML values
static HtmlEncode(valueToEncode: string): string {
    return valueToEncode.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

//Build search query string
static buildSearchParamsString(pageNumber: number, pageSize: number, sort: string, sortAsc: boolean = true, searchValue: string = '', searchColumn: string = 'name'): string {
    let searchParams: string = '?';

    if (!this.IsEmptyOrUndefined(pageNumber)) {
        searchParams = searchParams + (searchParams == '?' ? 'page=' : '&page=') + pageNumber;
    }

    if (!this.IsEmptyOrUndefined(pageSize)) {
        searchParams = searchParams + (searchParams == '?' ? 'pageSize=' : '&pageSize=') + pageSize;
    }

    if (!this.IsEmptyOrUndefined(sort)) {
        if (sortAsc) {
            searchParams = searchParams + (searchParams == '?' ? 'sort=' : '&sort=') + sort;
        }
        else {
            searchParams = searchParams + (searchParams == '?' ? 'sort=-' : '&sort=-') + sort;
        }
    }

    if (!this.IsEmptyOrUndefined(searchValue)) {
        let decodedValue: string;
        decodedValue = '{"' + searchColumn + '":"' + searchValue + '"}';
        searchParams = searchParams + (searchParams == '?' ? 'filterByExample=' : '&filterByExample=') + encodeURI(decodedValue);
    }

    return searchParams;
}


//Display toast notifications
static showNotification(from, align, message, type) {
    $.notify({
        icon: 'notifications',
        message: message
    }, {
            type: type,
            timer: 2000,
            placement: {
                from: from,
                align: align
            }
        });
}

//Generate avatar image uri using user credentials
static generateAvatarWithInitials(letters: string, backgroundColor?: string, textColor?: string, size?: number): string {

    let canvas = document.createElement('canvas');
    let context = canvas.getContext("2d");
    size = size || 161;

    // Generate a random color every time function is called
    // const color =  "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    const color = backgroundColor || '#468DCB';

    // Set canvas with & height
    canvas.width = size;
    canvas.height = size;

    // Select a font family to support different language characters
    // like Arial
    context.font = Math.round(canvas.width / 2) + "px Arial";
    context.textAlign = "center";

    // Setup background and front color
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = textColor || "#FFF";
    context.fillText(letters, size / 2, size / 1.5);

    // Set image representation in default format (png)
    let dataURI = canvas.toDataURL();

    // Dispose canvas element
    canvas = null;

    return dataURI;
}

//Scroll to top of the page
static scrollToTop(): void {
    setTimeout(function() { $('.main-panel.ps-container').scrollTop(0) }, 150);
}

//Check if current device is a touch device or not
static isTouchDevice(): boolean {
    const el = document.createElement('div');
    el.setAttribute('ontouchstart', 'return;');

    return typeof el.ontouchstart === "function";
 }

static isValidTimeFormat(value: string): boolean {
    const regEx = new RegExp(/^([01]\d|2[0-3]):([0-5]\d)$/);
    if (regEx.test(value)) {
      return true;
    }
    return false;
  }

static dateDifferenceInDays(startDate: Date, endDate: Date): number {
    const diff = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    console.log(diffDays);
    return diffDays;

}

static checkCurrentActivePage(router: Router): string {

    let currentActivePage;

    const tree: UrlTree = router.parseUrl(router.url);
    const groupUrl: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const segmentUrl: UrlSegment[] = groupUrl.segments;
    let currentStateUrl: string = '/';
    if (segmentUrl.length > 2) {
      currentActivePage = currentStateUrl + segmentUrl[0] + '/' + segmentUrl[1];
    } 
    else {
      currentActivePage = router.url;
    }

    return currentActivePage;

}        
}