// 通用评级
const COMMON_LEVEL = "1";

// 通用文字评价
const COMMON_TEXT = "讲的很好！";

/**
 * 检查exclusiveLevel 参数是否合法
 * 只能为 1 0.8 0.6 0.4 0.2
 */
function checkExclusiveLevel(inputLevel) {
	if (inputLevel !== "1" &&
		inputLevel !== "0.8" &&
		inputLevel !== "0.6" &&
		inputLevel !== "0.4" &&
		inputLevel !== "0.2") {
		console.error('exclusiveLevel must be: 1 or 0.8 or 0.6 or 0.4 or 0.2');
		return false;
	}
	else {
		console.info('exclusiveLevel=%s passed the checker.');
		return true;
	}

}


// common
function setCommon(exclusiveLevel, exclusiveText) {
	for (let ele of document.StDaForm.elements) {
	  if (ele.type === 'radio' && ele.value.split('_')[1] === String(exclusiveLevel)) {
			ele.checked = true;
		}
	}

	document.StDaForm.elements.zgpj.value = String(exclusiveText);
}



// final commit
function autoCommit(exclusiveTeacher, exclusiveLevel, exclusiveText) {

	if (!exclusiveTeacher || !exclusiveLevel || !exclusiveText) {
		console.log('参数存在undefined 或 null，当前不设置exclusive');
		setCommon(COMMON_LEVEL, COMMON_TEXT);
	}
	else {
		let exclusiveTeacherStr = String(exclusiveTeacher);
		let exclusiveLevelStr = String(exclusiveLevel);
		let exclusiveTextStr = String(exclusiveText);


		// checker
		if (!checkExclusiveLevel(exclusiveLevelStr)) {
			return '检查拦截不通过，请检查传入参数';
		}


		let teacher = $('.profile-info-value')[0].innerText;
		if (teacher === exclusiveTeacherStr) {
			setCommon(exclusiveLevelStr, exclusiveTextStr);
		}
		else {
			setCommon(COMMON_LEVEL, COMMON_TEXT);
		}
	}

	let int = setInterval(function () {
		let second = $('#RemainS')[0].innerText;
		console.info(second + '秒后会自动提交，请稍后...')
		if (second === '0') {
			console.info('ready to call toEvaluation()');
			toEvaluation();
			window.clearInterval(int);
			console.info('老师：' + teacher + ' 评教已经成功提交。');
		}
	}, 990);

	return '正在自动填写...';

}


autoCommit();


