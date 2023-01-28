const DEF_NUMBER: number = 492269;
function getTimeMillisShamsi(year: number, month: number, day: number, hour?: number | null, minute?: number | null, second?: number | null): number {
	if (hour == null) {
		hour = new Date().getHours();
	}
	if (minute == null) {
		minute = new Date().getMinutes();
	}
	if (second == null) {
		second = new Date().getSeconds();
	}

	const ONE_SECOND_MS: number = 1000;
	const ONE_MINUTE_MS: number = 60 * ONE_SECOND_MS;
	const ONE_HOUR_MS: number = 60 * ONE_MINUTE_MS;
	const ONE_DAY_MS: number = 24 * ONE_HOUR_MS;
	const days = getDays(year, month, day);
	const result: number = (days - DEF_NUMBER) * ONE_DAY_MS + hour * ONE_HOUR_MS + minute * ONE_MINUTE_MS + second * ONE_SECOND_MS;
	return isNaN(result) ? 0 : result;
}

function getYearMonthDayByMillis(timeMillis: number): number[] {
	let result: number[] = [];

	let last: number = Math.floor(timeMillis / (1000 * 60 * 60 * 24)) + DEF_NUMBER;

	let year: number = 1;
	while (last > 366) {
		last -= 365;
		last = isJalaliLeapYear(year) ? last - 1 : last;
		year++;
	}
	if (last == 366 && !isJalaliLeapYear(year)) {
		last -= 365;
		year++;
	}
	result.push(year);

	let month: number = 1;
	while (last > getJalaliMonthLength(year, month)) {
		last -= getJalaliMonthLength(year, month);
		month++;
	}
	result.push(month);
	result.push(last);
	return result;
}

function getDays(year: number, month: number, day: number) {
	let cntLeapDay: number = 0;
	for (let i: number = 0; i < year; i++) {
		if (isJalaliLeapYear(i)) {
			cntLeapDay++;
		}
	}

	year = year == 0 ? 1 : year;
	let dy: number = (year - 1) * 365 + cntLeapDay;
	for (let i: number = 1; i < month; i++) {
		dy += getJalaliMonthLength(year, i);
	}
	return dy + day;
}

function isJalaliLeapYear(year: number): boolean {
	return year % 33 == 1 || year % 33 == 5 || year % 33 == 9 || year % 33 == 13 || year % 33 == 17 || year % 33 == 22 || year % 33 == 26 || year % 33 == 30;
}

function getJalaliMonthLength(year: number, month: number): number {
	if (month <= 6) {
		return 31;
	}
	if (month <= 11) {
		return 30;
	}
	return isJalaliLeapYear(year) ? 30 : 29;
}

export { getTimeMillisShamsi, getYearMonthDayByMillis };
