export const insertUtils = `import {Utility} from "@friendofsvelte/tipex";
<Tipex body={body}>
  {#snippet utilities(tipex)}
    <Utility {tipex}/>
  {/snippet}
</Tipex>`;

export const appendUtils = `<Tipex body={body}>
 {#snippet utilities(tipex)}
   <div aria-label="Custom utility button">...</div>
 {/snippet}
</Tipex>`;

export const overrideControl = `<Tipex body={body}>
   {#snippet controlComponent(tipex)}
	   <div aria-label="New Custom Control">...</div>
	 {/snippet}
</Tipex>`;

export const install = `npm install "@friendofsvelte/tipex";`;
export const usage = `<script lang="ts">
    import {Tipex} from '@friendofsvelte/tipex';
    let body = \`<p>The initial html content.</p>\`;
</script>

<!-- Shorthands to disable: !controls !floating !focal -->
<Tipex {body} Display the default controls.
    style="margin-top: 1rem; margin-bottom: 0;" 
    class="h-[70vh] border border-neutral-200"/>
`;

let body = `
<p>This <strong>content</strong> was written by <a target="_blank" rel="noopener" href="http://bishwas.net/">Bishwas</a> in 2023. You can edit this content and see the changes in the editor.</p><p>Do you have any questions? Feel free to ask in the <a target="_blank" rel="noopener" href="https://github.com/friendofsvelte/tipex">Github repository</a>.</p><p>Try writing some code, list, or blockquote, and see how it looks in the editor.</p>
<hr/>
<p>I hope you enjoyed it 😊</p>
`;

export let styling = `import "@friendofsvelte/tipex/styles/index.css";`;

export let access = `<Tipex body={htmlCotent} bind:tipex={editor} />`;

const codes = {
	insertUtils,
	install,
	usage,
	appendUtils,
	overrideControl,
	body,
	access,
	styling
};
export default codes;
