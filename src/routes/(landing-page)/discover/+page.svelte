<script>
    import Heading from "./components/Heading.svelte";
    import Reason from "./components/Reason.svelte";
    import reasons from './data/reasons.json';
    import Project from "./components/Project.svelte";
    import projects from "./data/projects.json";
    import Form from "./components/Form.svelte";
</script>
<header class="hero flex flex-col justify-between">
    <div class="texts  text-theme-primary font-bold font-theme-rubik text-5xl m-4 grid grid-cols-1 grid-rows-3">
        <h1 class="my-3 justify-self-start">W<span>e</span> Plan</h1>
        <h1 class="my-3 justify-self-center">W<span>e</span> Build</h1>
        <h1 class="my-3 justify-self-end stroked text-transparent">W<span>e</span> Rock 🤙</h1>
    </div>
    <div class="image flex-grow flex flex-col justify-end">
        <img src="/hero.svg" alt="A person coding illustration" class="my-3 object-cover">
        <a href="#" class="w-full bg-theme-primary p-4 flex justify-center items-center font-theme-monda text-xl font-bold rounded-lg">Contribute Now</a>
    </div>
</header>

<main>
    <p class="mx-2 my-6 text-center text-white font-inter tracking-wide leading-relaxed"><span class="text-theme-primary font-bold">OBBOY</span> is a community where we build open source projects.</p>
    <Heading title="why are we doing this?" right/>
    <section class="reasons">
        {#each reasons as {reason} (reason)}
            <Reason {reason}/>
        {/each}
    </section>
    <Heading title="Projects We've done so far" left/>
    <section class="projects">
        {#each projects as {title, desc, href} (title)}
            <Project {title} {desc} {href}/>
        {/each}
    </section>
    <Heading title="Got Inspired? Join US" right/>
    <Form/>
</main>


<style>
    .hero{
        min-height: calc(100vh - (theme(spacing.14) + (2 * theme(spacing.3))));
    }
    .stroked{
        -webkit-text-stroke: 2px theme(colors[theme-primary]);
    }
    .reasons, .projects{
        @apply grid gap-2 my-8;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
</style>