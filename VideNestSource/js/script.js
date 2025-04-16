// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function () {
  // 导航菜单切换
  const menuToggle = document.querySelector('.menu-toggle')
  const navMenu = document.querySelector('.nav-menu')

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active')
      menuToggle.classList.toggle('active')
    })
  }

  // 点击导航链接时关闭菜单
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active')
        menuToggle.classList.remove('active')
      }
    })
  })

  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')

      if (targetId === '#') return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // 减去导航栏高度
          behavior: 'smooth'
        })
      }
    })
  })

  // 滚动时添加导航栏阴影和变化效果
  const header = document.querySelector('header')
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    })
  }

  // 添加动画效果
  const animateElements = document.querySelectorAll('.feature-card, .category-card, .future-feature, .section-title')

  // 检查元素是否在视口中
  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && rect.bottom >= 0
  }

  // 添加动画类
  function checkVisibility() {
    animateElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate')
      }
    })
  }

  // 初始检查
  setTimeout(checkVisibility, 100)

  // 滚动时检查
  window.addEventListener('scroll', checkVisibility)

  // 添加卡片悬停效果
  const featureCards = document.querySelectorAll('.feature-card')
  featureCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function () {
      this.style.transitionDelay = '0s'
    })
    card.addEventListener('mouseleave', function () {
      this.style.transitionDelay = '0s'
    })
    // 初始动画延迟
    card.style.transitionDelay = index * 0.1 + 's'
  })

  const categoryCards = document.querySelectorAll('.category-card')
  categoryCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function () {
      this.style.transitionDelay = '0s'
    })
    card.addEventListener('mouseleave', function () {
      this.style.transitionDelay = '0s'
    })
    // 初始动画延迟
    card.style.transitionDelay = index * 0.1 + 's'
  })

  // 添加滚动指示器点击事件
  const scrollIndicator = document.querySelector('.scroll-indicator')
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function () {
      const featuresSection = document.querySelector('#features')
      if (featuresSection) {
        window.scrollTo({
          top: featuresSection.offsetTop - 80,
          behavior: 'smooth'
        })
      }
    })
  }

  // 添加下载按钮悬停效果
  const downloadButtons = document.querySelectorAll('.download-btn')
  downloadButtons.forEach(button => {
    button.addEventListener('mouseenter', function () {
      this.classList.add('pulse')
    })
    button.addEventListener('mouseleave', function () {
      this.classList.remove('pulse')
    })
  })
})
