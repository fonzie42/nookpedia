module.exports = (plop) => {
  plop.setPartial('ComponentName', '{{pascalCase name}}')
  plop.setPartial('ComponentFileName', '{{dashCase name}}')
  plop.setPartial('ComponentViewName', '{{pascalCase name}}View')
  plop.setPartial('ComponentViewFileName', '{{dashCase name}}.view')
  plop.setPartial('SkeletonName', '{{pascalCase name}}Skeleton')
  plop.setPartial('SkeletonFileName', '{{dashCase name}}.skeleton')
  plop.setGenerator('components', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'input',
        name: 'folder',
        message: 'Location relative to /components (leave empty for root)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
      {
        type: 'confirm',
        name: 'includeContainer',
        message: 'Split logic and view components?',
        default: false,
      },
      {
        type: 'confirm',
        name: 'includeStorybook',
        message: 'Include Storybook?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'includeSkeletonLoader',
        message: 'Include Skeleton Loader?',
        default: true,
      },
    ],
    actions: ({
      includeContainer,
      includeStorybook,
      includeSkeletonLoader,
    }) => {
      const destination =
        'src/components/{{#if folder}}{{ folder }}/{{/if}}{{dashCase name}}/'

      const actions = [
        {
          type: 'addMany',
          destination,
          base: 'src/__generators__/Component/',
          templateFiles: 'src/__generators__/Component/**/*.*',
        },
      ]

      if (includeContainer) {
        actions.push({
          type: 'addMany',
          destination,
          base: 'src/__generators__/View/',
          templateFiles: 'src/__generators__/View/**/*.*',
        })
      }

      if (includeStorybook) {
        actions.push({
          type: 'addMany',
          destination,
          base: 'src/__generators__/Storybook/',
          templateFiles: 'src/__generators__/Storybook/**/*.*',
        })
      }

      if (includeSkeletonLoader) {
        actions.push({
          type: 'addMany',
          destination,
          base: 'src/__generators__/Skeleton/',
          templateFiles: 'src/__generators__/Skeleton/**/*.*',
        })
      }

      return actions
    },
  })
  plop.setGenerator('test', {
    description: 'Add `tests` folder and file to existing React component',
    prompts: [
      {
        type: 'input',
        name: 'folder',
        message: 'Location relative to /components (leave empty for root)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Test name (should match component name)',
      },
    ],
    actions: () => {
      const destination =
        'src/components/{{#if folder}}{{ folder }}{{/if}}/tests'

      const actions = [
        {
          type: 'addMany',
          destination,
          base: 'src/__generators__/Component/tests',
          templateFiles: 'src/__generators__/Component/tests/*.*',
        },
      ]

      return actions
    },
  })
  plop.setGenerator('storybook', {
    description: 'Add a Storybook story to an existing React component',
    prompts: [
      {
        type: 'input',
        name: 'folder',
        message: 'Location relative to /components (leave empty for root)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Story name (should match component name)',
      },
    ],
    actions: () => {
      const destination = 'src/components/{{#if folder}}{{ folder }}{{/if}}'

      const actions = [
        {
          type: 'addMany',
          destination,
          base: 'src/__generators__/Storybook/',
          templateFiles: 'src/__generators__/Storybook/**/*.*',
        },
      ]

      return actions
    },
  })
}
