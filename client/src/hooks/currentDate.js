export default function currentDate(setDate, countDay) {
    if (setDate === undefined) {
        const day = new Date().getDate();
        const outDay = new Date(
            new Date().getTime() + 24 * 60 * 60 * 1000
        ).getDate();
        const month = new Date().getMonth();
        const outMonth =
            new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getMonth() + 1;
        const year = new Date().getFullYear().toString();
        const formatDay = day < 10 ? `0${day}` : `${day}`;
        const formatOutDay = outDay < 10 ? `0${outDay}` : `${outDay}`;
        const formatMonth = month < 10 ? `0${+month + 1}` : +month + 1;
        const formatOutMonth = outMonth < 10 ? `0${+outMonth}` : +outMonth + 1;

        if (month >= 10) {
            formatMonth.toString();
        }
        if (outMonth >= 10) {
            formatOutMonth.toString();
        }
        return {
            formatDay,
            formatMonth,
            year,
            formatOutDay,
            formatOutMonth,
        };
    }
    if (setDate !== undefined && countDay) {
        const setDay = new Date(`${setDate}`).getDate();
        const countDayMult = countDay * 1000;
        const setOutDay = new Date(
            new Date(`${setDate}`).getTime() + 24 * 60 * 60 * countDayMult
        ).getDate();
        const setMonth = new Date(`${setDate}`).getMonth() + 1;
        const setOutMonth =
            new Date(
                new Date(`${setDate}`).getTime() + 24 * 60 * 60 * countDayMult
            ).getMonth() + 1;
        const year = new Date(`${setDate}`).getFullYear().toString();
        const setFormatDay = setDay < 10 ? `0${setDay}` : `${setDay}`;
        const setFormatOutDay =
            setOutDay < 10 ? `0${setOutDay}` : `${setOutDay}`;
        const setFormatMonth =
            setMonth < 10 ? `0${setMonth}` : `${setMonth}`;
        const setFormatOutMonth =
            setOutMonth < 10 ? `0${setOutMonth}` : `${setOutMonth}`;

        return {
            setFormatDay,
            setFormatMonth,
            year,
            setFormatOutDay,
            setFormatOutMonth,
        };
    }
}
