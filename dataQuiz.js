export const dataQuiz = [
  {
    id: 1,
    template: `<h3 data-question="Реєстрація знижки" style="text-align:center;width:100%">Реєстрація знижки</h3>
				<p>Заповніть форму, щоб ми могли зареєструвати на вас знижку!</p>
				<label for="firstName">
					<input type="text" placeholder="Ваше ім'я" id="firstName" class="input-contact input" autocomplete="given-name">
				</label>
				<label for="lastName">
					<input type="text" placeholder="Ваше призвіще" id="lastName" class="input-contact input" autocomplete="family-name">
				</label>
				<label for="tel">
					<input type="tel" placeholder="Ваш телефон" id="tel" class="input-contact input" autocomplete="tel">
				</label>
				`,
  },
  {
    id: 2,
    template: ` <h3 data-question="Що вас цікавить?" id="question2">Що вас цікавить?</h3>
					<label for="ortodont">
						<input type="checkbox" id="ortodont" class="checkbox input" value="Виправлення прикусу">
						<p>Виправлення прикусу</p>
					</label>
					<label for="ortoped">
						<input type="checkbox" id="ortoped" class="checkbox input" value="Протезування або імплантація зубів">
						<p>Протезування або імплантація зубів</p>
					</label>
					<label for="whitening">
						<input type="checkbox" id="whitening" class="checkbox input" value="Видалення зубного каменю або відбілювання зубів">
						<p>Видалення зубного каменю або відбілювання зубів</p>
					</label>
					<label for="parodont">
						<input type="checkbox" id="parodont" class="checkbox input" value="Лікування ясен">
						<p>Лікування ясен</p>
					</label>
					<label for="terapy">
						<input type="checkbox" id="terapy" class="checkbox input" value="Лікування карієсу">
						<p>Лікування карієсу</p>
					</label>`,
  },
  {
    id: 3,
    template: `<h3 data-question="Чому не звернулися раніше?" id="question3">Чому не звернулися раніше?</h3>
				<label for="nomony">
					<input type="radio" name="radio" id="nomony" class="radio input" value="Боюся що стоматологія це дорого і мені не вистачить коштів">
					<p>
						Боюся що стоматологія це дорого і мені не вистачить коштів
					</p>
				</label>
				<label for="painful">
					<input type="radio" name="radio" id="painful" class="radio input" value="Боюся що буде боляче">
					<p>
						Боюся що буде боляче
					</p>
				</label>
				<label for="choose">
					<input type="radio" name="radio" id="choose" class="radio input" value="Як раз обираю клініку">
					<p>
						Як раз обираю клініку
					</p>
				</label>`,
  },
  {
    id: 4,
    template: `
	<h3 data-question="Ваша знижка" class="game__title" id="question4">Колесо Фортуни!</h3>				
	<div class="game" id="game">
		<label for="discountInput" style="cursor:text">
			<p id="discountText"><span style="text-align:center;">Тисни "СТАРТ" - отримай знижку!!!</span>
				<input type="text" id="discountInput" class="input_frm input" value="🡻" autocomplete="off">
			</p>
		</label>
		<div class="game__container">
			<div class="spinBtn active">СТАРТ</div>
			<div class="wheel">
				<div class="number" id="5" style="--i:1;--clr:#db7093;">
					<span>5</span>
				</div>
				<div class="number" id="9" style="--i:2;--clr:#20b2aa;">
					<span>9</span>
				</div>
				<div class="number" id="7" style="--i:3;--clr:#d63e92;">
					<span>7</span>
				</div>
				<div class="number" id="1" style="--i:4;--clr:#daa520;">
					<span>1</span>
				</div>
				<div class="number" id="4" style="--i:5;--clr:#83526e;">
					<span>4</span>
				</div>
				<div class="number" id="2" style="--i:6;--clr:#ff7f50;">
					<span>2</span>
				</div>
				<div class="number" id="8" style="--i:7;--clr:#3cb371;">
					<span>8</span>
				</div>
				<div class="number" id="10" style="--i:8;--clr:#4169e1;">
					<span>10</span>
				</div>
				<div class="number" id="3" style="--i:9;--clr:#87604bfd;">
					<span>3</span>
				</div>
				<div class="number" id="6" style="--i:10;--clr:#ff340f;">
					<span>6</span>
				</div>
			</div>
		</div>
	</div>`,
  },
  {
    id: 5,
    template: `
		<h3 data-question="Повна інформація" style="text-align:center;width:100%">Повна інформація</h3>
		<p>Перевірте правильность введеної інформації</p>
		<label for="firstName" class="column-start">
			<span>Ваше ім'я*:</span>
			<input type="text" placeholder="Ваше ім'я" id="firstName" name="firstName" class="input-contact input" autocomplete="given-name">
		</label>
		<label for="lastName" class="column-start">
			<span>Ваша фамілія*:</span>
			<input type="text" placeholder="Ваше призвіще" id="lastName" name="lastName" class="input-contact input" autocomplete="family-name">
		</label>
		<label for="tel" class="column-start">
			<span>Ваш телефон:</span>
			<input type="tel" placeholder="Ваш телефон" id="tel" name="tel" class="input-contact input" autocomplete="tel">
		</label>
		<label for="question1" class="column-start">
			<span>Що вас цікавить:</span>
			<textarea type="text" id="q2" class="input-contact input" style="pointer-events:none" autocomplete="off"></textarea>
		</label>
		<label for="question2" class="column-start">
			<span>Чому не звернулися раніше:</span>
			<textarea type="text" id="q3" class="input-contact input" style="pointer-events:none" autocomplete="off"></textarea>
		</label>
		<label for="question3" class="column-start">
			<span>Ваша знижка:</span>
			<input type="text" id="q4" class="input-contact input" style="pointer-events:none" autocomplete="off"></textarea>
		</label>
		`,
  },
];
