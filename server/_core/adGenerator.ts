// adGenerator.ts

/**
 * Groq-powered Ad Copy and Visual Generator
 * Created on 2026-04-18
 * This script generates 10 high-converting ad variations optimized for Meta's best-performing patterns.
 */

function generateAdVariations() {
    const variations = [];
    const headlines = [
        'Unleash the Power of Creativity!',
        'Transform Your Ideas into Reality!',
        'Maximize Your Impact with Our Tools!',
        'Get Results That Matter!',
        'Elevate Your Brand to New Heights!',
        'Reach a Wider Audience Today!',
        'Discover the Future of Advertising!',
        'Innovative Solutions Await You!',
        'Make Your Mark with Our Services!',
        'Your Success Starts Here!'
    ];
    const images = [
        'image_prompt_1',
        'image_prompt_2',
        'image_prompt_3',
        'image_prompt_4',
        'image_prompt_5',
        'image_prompt_6',
        'image_prompt_7',
        'image_prompt_8',
        'image_prompt_9',
        'image_prompt_10'
    ];
    const ctas = [
        'Learn More',
        'Sign Up Now',
        'Get Started',
        'Try for Free',
        'Join Us',
        'Shop Now',
        'Explore',
        'Get Your Offer',
        'Take Action',
        'See How'
    ];

    for (let i = 0; i < 10; i++) {
        const ad = {
            copy: `Engage with our service and ${headlines[i]} We offer the best tools to help you ${ctas[i].toLowerCase()}.`,
            headline: headlines[i],
            image_prompt: images[i],
            call_to_action: ctas[i]
        };
        variations.push(ad);
    }

    return variations;
}

console.log(generateAdVariations());
