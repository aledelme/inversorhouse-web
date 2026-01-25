import { clerkClient } from '@clerk/nextjs/server';

/**
 * Obtiene la información completa de un usuario por su Clerk ID
 * @param userId - El ID del usuario en Clerk
 * @returns La información del usuario o null si no se encuentra
 */
export async function getUserById(userId: string) {
    try {
        const client = await clerkClient();
        const user = await client.users.getUser(userId);

        if (!user) {
            return null;
        }
        return {
            id: user.id,
            email: user.emailAddresses.find(email => email.id === user.primaryEmailAddressId)?.emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
            fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
            imageUrl: user.imageUrl,
            username: user.username,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            publicMetadata: user.publicMetadata,
            privateMetadata: user.privateMetadata,
            unsafeMetadata: user.unsafeMetadata,
        };
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        return null;
    }
}

/**
 * Busca un usuario por su dirección de email
 * @param email - El email del usuario a buscar
 * @returns La información del usuario o null si no se encuentra
 */
export async function getUserByEmail(email: string) {
    try {
        const client = await clerkClient();
        const users = await client.users.getUserList({
            emailAddress: [email],
        });

        if (users.data.length === 0) {
            return null;
        }

        const user = users.data[0];

        return {
            id: user.id,
            email: user.emailAddresses.find(emailAddr => emailAddr.id === user.primaryEmailAddressId)?.emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
            fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
            imageUrl: user.imageUrl,
            username: user.username,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            publicMetadata: user.publicMetadata,
            privateMetadata: user.privateMetadata,
            unsafeMetadata: user.unsafeMetadata,
        };
    } catch (error) {
        console.error('Error fetching user by email:', error);
        return null;
    }
}

/**
 * Actualiza los metadatos públicos de un usuario
 * @param userId - El ID del usuario en Clerk
 * @param metadata - Los metadatos a actualizar
 * @returns true si se actualizó correctamente, false en caso de error
 */
export async function updateUserMetadata(
    userId: string,
    metadata: Record<string, unknown>
) {
    try {
        const client = await clerkClient();
        await client.users.updateUser(userId, {
            publicMetadata: metadata,
        });
        return true;
    } catch (error) {
        console.error('Error updating user metadata:', error);
        return false;
    }
}

/**
 * Obtiene múltiples usuarios por sus IDs
 * @param userIds - Array de IDs de usuarios
 * @returns Array con la información de los usuarios encontrados
 */
export async function getUsersByIds(userIds: string[]) {
    try {
        const client = await clerkClient();
        const users = await client.users.getUserList({
            userId: userIds,
        });

        return users.data.map(user => ({
            id: user.id,
            email: user.emailAddresses.find(email => email.id === user.primaryEmailAddressId)?.emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
            fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
            imageUrl: user.imageUrl,
            username: user.username,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            publicMetadata: user.publicMetadata,
        }));
    } catch (error) {
        console.error('Error fetching users by IDs:', error);
        return [];
    }
}

/**
 * Verifica si un usuario existe por su email
 * @param email - El email a verificar
 * @returns true si el usuario existe, false si no
 */
export async function userExistsByEmail(email: string): Promise<boolean> {
    try {
        const client = await clerkClient();
        const users = await client.users.getUserList({
            emailAddress: [email],
        });
        return users.data.length > 0;
    } catch (error) {
        console.error('Error checking if user exists:', error);
        return false;
    }
}
