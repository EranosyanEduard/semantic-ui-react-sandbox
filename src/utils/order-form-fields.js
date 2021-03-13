const ORDER_FORM_FIELDS = [
  {
    as: 'input',
    type: 'number',
    className: 'passenger__field_column_all',
    name: 'socialDocumentId',
    label: 'СНИЛС или номер регистрации ЦСМ',
    placeholder: 'Номер документа',
    dependency: {
      name: 'hasBenefit',
      isDirect: false
    }
  },
  {
    as: 'input',
    type: 'text',
    name: 'lastName',
    label: 'Фамилия',
    placeholder: 'Фамилия',
    required: true,
    dependency: {
      name: 'hasBenefit',
      isDirect: true
    }
  },
  {
    as: 'input',
    type: 'text',
    name: 'firstName',
    label: 'Имя',
    placeholder: 'Имя',
    required: true,
    dependency: {
      name: 'hasBenefit',
      isDirect: true
    }
  },
  {
    as: 'input',
    type: 'text',
    name: 'middleName',
    label: 'Отчество',
    placeholder: 'Отчество',
    required: true,
    dependency: {
      name: 'hasBenefit',
      isDirect: true
    }
  },
  {
    as: 'select',
    name: 'gender',
    label: 'Пол',
    placeholder: 'Пол',
    options: [
      { text: 'Мужской', value: 'male' },
      { text: 'Женский', value: 'female' }
    ],
    required: true,
    dependency: {
      name: 'hasBenefit',
      isDirect: true
    }
  },
  {
    as: 'input',
    type: 'date',
    name: 'birthday',
    label: 'Дата рождения',
    required: true,
    dependency: {
      name: 'hasBenefit',
      isDirect: true
    }
  },
  {
    as: 'select',
    name: 'citizenship',
    label: 'Гражданство',
    placeholder: 'Гражданство',
    options: [
      { text: 'Страна 1', value: 'country-1' },
      { text: 'Страна 2', value: 'country-2' }
    ],
    required: true
  },
  {
    as: 'select',
    name: 'docType',
    label: 'Тип документа',
    placeholder: 'Тип документа',
    options: [
      { text: 'Документ 1', value: 'document-1' },
      { text: 'Документ 2', value: 'document-2' }
    ],
    required: true
  },
  {
    as: 'input',
    type: 'number',
    name: 'docNumber',
    label: 'Номер документа',
    placeholder: 'Номер документа',
    required: true
  },
  {
    as: 'select',
    name: 'tariff',
    label: 'Тариф',
    placeholder: 'Тариф',
    options: [
      { text: 'Тариф 1', value: 'tariff-1' },
      { text: 'Тариф 2', value: 'tariff-2' }
    ],
    required: true
  }
];

export default ORDER_FORM_FIELDS;
