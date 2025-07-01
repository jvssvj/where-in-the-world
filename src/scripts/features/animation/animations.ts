import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function initUIReveal() {
    gsap.from(".header__content__t", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    })

    gsap.from(".header__content__switch__theme", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    })

    gsap.from(".nav", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    })
}

export function initCountriesReveal() {
    gsap.from("#countries", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
    })
}

export function initCountryDetailsReveal() {
    gsap.from(".reveal-flag-overview", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
    })

    gsap.from(".reveal-details-overview", {
        x: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
    })
}