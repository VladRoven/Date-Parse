function parseDate(date, toSql, type, showMonthAsWord, showTime, showSeconds) 
{
	let day = date.getDate()
	let month = (parseInt(date.getMonth()) + 1) < 10 ? '0' + (parseInt(date.getMonth()) + 1).toString() : (parseInt(date.getMonth()) + 1).toString()
	let year = date.getFullYear()
	let time = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
	let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()	
	let monthWord = 
	{
		'01' : 'января',
		'02' : 'февраля',
		'03' : 'марта',
		'04' : 'апреля',
		'05' : 'мая',
		'06' : 'июня',
		'07' : 'июля',
		'08' : 'августа',
		'09' : 'сентября',
		'10' : 'октября',
		'11' : 'ноября',
		'12' : 'декабря',
	}

	if (toSql) 
	{
		switch (type) {
			case 'date':
				return (year + '-' + month + '-' + (day < 10 ? '0' + day : day))
				break
			case 'datetime':
				return (year + '-' + month + '-' + (day < 10 ? '0' + day : day) + ' ' + time + ':' + seconds)
				break
		}
	}
	
	if (showMonthAsWord) 
	{
		if (showTime) 
		{
			if (showSeconds) 
			{
				return (day + ' ' + monthWord[month] + ' ' + year + ' ' + time + ':' + seconds)
			}
			return (day + ' ' + monthWord[month] + ' ' + year + ' ' + time)
		}
		return (day + ' ' + monthWord[month] + ' ' + year)
	}
	else
	{
		if (showTime) 
		{
			if (showSeconds) 
			{
				return ((day < 10 ? '0' + day : day) + '.' + month + '.' + year + ' ' + time + ':' + seconds)
			}
			return ((day < 10 ? '0' + day : day) + '.' + month + '.' + year + ' ' + time)
		}
		return ((day < 10 ? '0' + day : day) + '.' + month + '.' + year)
	}

}