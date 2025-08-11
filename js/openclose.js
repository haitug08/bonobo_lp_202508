function classList(e) {
    if (e.classList) return e.classList;   // Return e.classList if it exists
    else return new CSSClassList(e);       // Otherwise try to fake it
}

// CSSClassList is a JavaScript class that simulates DOMTokenList
function CSSClassList(e) { this.e = e; }

// Return true if e.className contains the class c, false otherwise
CSSClassList.prototype.contains = function(c) {
    // Check that c is a valid class name
    if (c.length === 0 || c.indexOf(" ") != -1) 
        throw new Error("Invalid class name: '" + c + "'");
    // Check common cases first
    var classes = this.e.className;
    if (!classes) return false;       // e has no classes at all
    if (classes === c) return true;   // e has one class that matches exactly
    
    // Otherwise, use a RegExp to search for c as a word by itself
    // \b in a regular expression requires a match at a word boundary.
    return classes.search("\\b" + c + "\\b") != -1;
};

// Add c to the e.className if it is not already present
CSSClassList.prototype.add = function(c) {
    if (this.contains(c)) return;            // Do nothing if already present
    var classes = this.e.className;
    if (classes && classes[classes.length-1] != " ")
        c = " " + c;                         // Add a space if we need one
    this.e.className += c;                   // Add c to the className
};

// Remove all occurrences of c from e.className
CSSClassList.prototype.remove = function(c) {
    // Make sure c is a valid class name
    if (c.length === 0 || c.indexOf(" ") != -1) 
        throw new Error("Invalid class name: '" + c + "'");
    // Remove all occurances of c as a word, plus any trailing space
    var pattern = new RegExp("\\b" + c + "\\b\\s*", "g");
    this.e.className = this.e.className.replace(pattern, "");
};

// Add c to e.className if it is not already present and return true.
// Otherwise, remove all occurrences of c from e.className and return false.
CSSClassList.prototype.toggle = function(c) {
    if (this.contains(c)) {  // If e.className contains c
        this.remove(c);      // then remove it.
        return false;
    }
    else {                   // Otherwise:
        this.add(c);         // add it.
        return true;
    }
};

// Return e.className itself
CSSClassList.prototype.toString = function() { return this.e.className; };

// Return of the names in e.className
CSSClassList.prototype.toArray = function() {
    return this.e.className.match(/\b\w+\b/g) || [];
};
function do_onoff(hdr, item)
{
	var e = document.getElementById(hdr);
	var e2 = document.getElementById(item);
	if (e2.style.display == 'none') {
		e2.style.display = 'block';
		classList(e).remove('close');
		classList(e).add('open');
	} else {
		e2.style.display = 'none';
		classList(e).remove('open');
		classList(e).add('close');
	}
}
function open_close(hdr, item)
{
	var e = document.getElementById(hdr);
	var e2 = document.getElementById(item);
	e.addEventListener("click", function() { do_onoff(hdr, item); }, false);

	classList(e).remove('open');
	classList(e).add('close');
	if (classList(e).contains('open')) {
//		e.style.display = '';
		e2.style.display = '';
	}
	if (classList(e).contains('close')) {
//		e.style.display = '';
		e2.style.display = 'none';
	}

}
function OCisSmartPhone()
{
	return (
		(navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || 
		navigator.userAgent.indexOf('iPod') > 0 || 
		navigator.userAgent.indexOf('Android') > 0);
}
function OCdisplayWidth()
{
	return window.parent.screen.width;
}
function OCwindowWidth()
{
	if (window.screen.width < window.innerWidth) {
		return window.screen.width;
	}
	return window.innerWidth;
}

document.addEventListener('DOMContentLoaded', function() {
  const openPlanModalBtn = document.getElementById('openPlanModal');
  const modal = document.getElementById('plan');
  const closeBtn = modal.querySelector('.close-btn');
  const iframe = modal.querySelector('iframe');

  openPlanModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
    modal.classList.add('open');

    const originalSrc = iframe.src;
    iframe.src = originalSrc;
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.classList.add('close-animation');

    modal.addEventListener('animationend', function() {
      modal.style.display = 'none';
      modal.classList.remove('close-animation');
    }, { once: true });
  }

  // 「閉じる」ボタンのクリックイベントのみを記述
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const openService1ModalBtn = document.getElementById('openService1Modal');
  const modal = document.getElementById('service1');
  const closeBtn = modal.querySelector('.close-btn');
  const iframe = modal.querySelector('iframe');

  openService1ModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
    modal.classList.add('open');

    const originalSrc = iframe.src;
    iframe.src = originalSrc;
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.classList.add('close-animation');

    modal.addEventListener('animationend', function() {
      modal.style.display = 'none';
      modal.classList.remove('close-animation');
    }, { once: true });
  }

  // 「閉じる」ボタンのクリックイベントのみを記述
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const openService2ModalBtn = document.getElementById('openService2Modal');
  const modal = document.getElementById('service2');
  const closeBtn = modal.querySelector('.close-btn');
  const iframe = modal.querySelector('iframe');

  openService2ModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
    modal.classList.add('open');

    const originalSrc = iframe.src;
    iframe.src = originalSrc;
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.classList.add('close-animation');

    modal.addEventListener('animationend', function() {
      modal.style.display = 'none';
      modal.classList.remove('close-animation');
    }, { once: true });
  }

  // 「閉じる」ボタンのクリックイベントのみを記述
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const openService3ModalBtn = document.getElementById('openService3Modal');
  const modal = document.getElementById('service3');
  const closeBtn = modal.querySelector('.close-btn');
  const iframe = modal.querySelector('iframe');

  openService3ModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
    modal.classList.add('open');

    const originalSrc = iframe.src;
    iframe.src = originalSrc;
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.classList.add('close-animation');

    modal.addEventListener('animationend', function() {
      modal.style.display = 'none';
      modal.classList.remove('close-animation');
    }, { once: true });
  }

  // 「閉じる」ボタンのクリックイベントのみを記述
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const openService4ModalBtn = document.getElementById('openService4Modal');
  const modal = document.getElementById('service4');
  const closeBtn = modal.querySelector('.close-btn');
  const iframe = modal.querySelector('iframe');

  openService4ModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
    modal.classList.add('open');

    const originalSrc = iframe.src;
    iframe.src = originalSrc;
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.classList.add('close-animation');

    modal.addEventListener('animationend', function() {
      modal.style.display = 'none';
      modal.classList.remove('close-animation');
    }, { once: true });
  }

  // 「閉じる」ボタンのクリックイベントのみを記述
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const openService5ModalBtn = document.getElementById('openService5Modal');
  const modal = document.getElementById('service5');
  const closeBtn = modal.querySelector('.close-btn');
  const iframe = modal.querySelector('iframe');

  openService5ModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
    modal.classList.add('open');

    const originalSrc = iframe.src;
    iframe.src = originalSrc;
  });

  function closeModal() {
    modal.classList.remove('open');
    modal.classList.add('close-animation');

    modal.addEventListener('animationend', function() {
      modal.style.display = 'none';
      modal.classList.remove('close-animation');
    }, { once: true });
  }

  // 「閉じる」ボタンのクリックイベントのみを記述
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});

var requestTop = $('.request').offset().top;
function scrollFixTop() {
  var scroll = $(window).scrollTop();
  if(scroll >= requestTop) {
    $('.request').addClass('fix');
  } else {
    if($('.request').hasClass('fix')) {
      $('.request').removeClass('fix');
    }
  }
};
$(window).scroll(function (){
  scrollFixTop();
});


document.addEventListener('DOMContentLoaded', () => {
  const offsetTop = 350;
  const hysteresis = 50; // 元コードの(350 - 50)の差

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > offsetTop) {
      document.body.classList.add('is-fixed-pagetop');
    } else if (scrollTop < offsetTop - hysteresis) {
      document.body.classList.remove('is-fixed-pagetop');
    }
  });
});

document.querySelectorAll('[id^=open]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.add('modal-open');
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.remove('modal-open');
  });
});

