import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Contact from 'react-native-contacts';
// NOTE: first you need to install contact
const ContactDetails = async () => {
    if (Platform.OS === 'ios') {
        return Contacts();
    }

    if (Platform.OS === 'android') {
        await Permission();
        return Contacts();
    }
};

const Permission = async () => {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: "Allow",
    })
};

const Contacts = async () => {
    const contact = await Contact.getAll()
        .then(contacts => {
            return contacts.map(contact => ({
                recordID: contact.recordID,
                backTitle: contact?.backTitle,
                company: contact?.company,
                email: contact?.emailAddresses[0] ? contact.emailAddresses[0].email : null,
                displayName: contact?.displayName,
                familyName: contact?.familyName,
                name: contact.givenName,
                middleName: contact?.middleName,
                jobTitle: contact?.jobTitle,
                phoneNumber: contact?.phoneNumbers[0] ? contact.phoneNumbers[0]?.number.replace(/[^0-9]/g, '') : null,
                city: contact?.postalAddresses[0] ? contact.postalAddresses[0]?.city : null,
                country: contact?.postalAddresses[0] ? contact.postalAddresses[0]?.country : null,
                label: contact?.postalAddresses[0] ? contact.postalAddresses[0]?.label : null,
                postCode: contact?.postalAddresses[0] ? contact.postalAddresses[0]?.postCode : null,
                region: contact?.postalAddresses[0] ? contact.postalAddresses[0]?.region : null,
                state: contact?.postalAddresses[0] ? contact.postalAddresses[0]?.state : null,
                street: contact?.postalAddresses[0] ? contact.postalAddresses[0]?.street : null,
                prefix: contact?.prefix,
                suffix: contact?.suffix,
                department: contact?.department,
                birthday: contact?.birthday,
            }));
        })
        .catch(error => {
            throw error;
        });
    return contact
};

const useContactSearch = (contacts) => {
    const [search, setSearch] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(contacts);

    useEffect(() => {
        const filtered = contacts.filter((contacts) => contacts.name.toLowerCase().includes(search.toLowerCase()) || contacts.phoneNumber.includes(search) || contacts.email.toLowerCase().includes(search.toLowerCase()))
        setFilteredContacts(filtered);
    }, [search, contacts]);

    return { search, setSearch, filteredContacts };
};

export { ContactDetails}