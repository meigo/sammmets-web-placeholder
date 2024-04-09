<script>
  import Logo from "$lib/Logo.svelte";
  import grain from "$lib/images/grain.png";

  const metaTitle = "Samm Mets";
  const metaDescription =
    "Samm Mets OÜ põhilised tegevusalad on metsakinnistuste ost, metsa ülestöötamine, metsamaterjali ost, metsamaterjali vedu ning saematerjali tootmine.";
</script>

<svelte:head>
  <title>{metaTitle}</title>
  <meta name="description" content={metaDescription} />
  <meta name="robots" content="noindex" />
</svelte:head>

<main class="">
  <h1 class="fixed text-xs text-sm-green opacity-5 -top-10">{metaTitle}</h1>

  <!-- BG -->
  <enhanced:img src="$lib/images/bg.jpg?w=1280;640;400" alt="" class="fixed block object-cover w-full h-full" />

  <div class="relative flex flex-col justify-between h-full min-h-screen">
    <div class="flex items-center h-full grow">
      <div class="flex flex-col items-center w-full h-full max-w-6xl p-4 mx-auto -top-16 sm:-top-10">
        <Logo class="w-[75vw] sm:w-[30rem]" />

        <h2 class="px-4 py-2 font-black text-center text-16vw sm:text-8xl font-title text-sm-cream">KODULEHT UUENEB!</h2>

        <div class="px-2 py-2 mt-4 text-base font-semibold text-center sm:px-6 sm:py-4 sm:mt-10 sm:text-xl bg-sm-cream">
          Infot meie toodete ja teenuste kohta saab
          <br class="hidden sm:inline-block" />
          <a href="mailto:sammmets@gmail.com" class="text-sm-green">sammmets@gmail.com</a>
          või +3725520524
        </div>
      </div>
    </div>

    <div class="w-full px-3 pb-6 text-base text-center sm:px-4 sm:text-lg text-sm-cream place-justify-end">
      Sae-ja Höövelmaterjal · Puidugraanul · Metsamaterjali ost Metsa ülestöötamine, Raieõiguste ja kinnistute ost · Veoteenus
    </div>
  </div>

  <!-- GRAIN OVERLAY -->
  <div class="absolute inset-0 pointer-events-none mix-blend-overlay" style="background-image: url({grain})"></div>
</main>
